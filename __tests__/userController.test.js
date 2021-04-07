const app = require("../src/index");
const { userSchema } = require("../src/connectors/mongoDbConnector");
const request = require("supertest");
jest.setTimeout(40000);

let serverTest;
let agent;

describe("userController", () => {
  beforeEach((done) => {
    serverTest = app.listen(3030, (err) => {
      agent = request.agent(serverTest);
      return done(err);
    });
  });

  afterEach(async (done) => {
    //await mongoose.connection.db.dropCollection("users");
    return serverTest && serverTest.close(done);
  });

  /* beforeEach(async () => {
    user = {
      name: "Matheus",
      sex: "Masculino",
      dataOfBirth: "18032000",
      age: "21",
      cityLive: "Mogi Mirim",
    };
  }); */

  it("Should create user", async () => {
    const user = {
      name: "Matheus",
      sex: "Masculino",
      dataOfBirth: "18032000",
      age: "21",
      cityLive: "Mogi Mirim",
    };

    const response = await agent.post("/usuario").send(user);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id");
  });
});
