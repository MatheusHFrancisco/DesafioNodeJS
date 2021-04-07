const app = require("../src/index");
const request = require("supertest");
jest.setTimeout(40000);

let serverTest;
let agent;

describe("cityController", () => {
  beforeEach((done) => {
    serverTest = app.listen(3031, (err) => {
      agent = request.agent(serverTest);
      return done(err);
    });
  });

  afterEach(async (done) => {
    return serverTest && serverTest.close(done);
  });

  it("Should create city", async () => {
    const city = {
      city: "Mogi Mirim",
      state: "São Paulo",
    };

    const response = await agent.post("/cidade").send(city);
    expect(response.status).toBe(200);
  });
});
