const app = require("../src/index");
const request = require("supertest");
jest.setTimeout(40000);

let serverTest;
let agent;
let id;

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
  });

  it("Should get user", async () => {
    const response = await agent.get("/usuario");
    expect(response.status).toBe(200);
  });

  it("Should getUserPerName", async () => {
    const name = "Matheus";

    const response = await agent.get("/usuario/search/" + name);
    expect(response.status).toBe(200);
  });

  /* it("Should getUserPerId", async () => {
    const response = await agent.get("/usuario/" + "123");
    expect(response.status).toBe(200);
  }); */

  it("Should update user per name", async () => {
    const userName = {
      name: "Matheus",
      sex: "Masculino",
      dataOfBirth: "18032000",
      age: "21",
      cityLive: "Mogi Mirim",
    };

    const user = {
      name: "Matheus Henrique",
      sex: "Masculino",
      dataOfBirth: "18032000",
      age: "21",
      cityLive: "Mogi Mirim",
    };

    const response = await agent
      .put("/usuario/search/" + userName.name)
      .send(user);
    expect(response.status).toBe(200);
  });

  it("Should delete user per name", async () => {
    const name = "Matheus";
    const response = await agent.delete("/usuario/search/" + name);
    expect(response.status).toBe(200);
  });
});
