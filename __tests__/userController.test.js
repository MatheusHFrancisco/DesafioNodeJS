const app = require("../src/index");
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
    return serverTest && serverTest.close(done);
  });

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
