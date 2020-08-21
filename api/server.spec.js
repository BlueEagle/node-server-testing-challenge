const server = require("./server");
const supertest = require("supertest");

describe("server", () => {
  describe("GET /projects", () => {
    it("should return 200 OK using async/await", async () => {
      const res = await supertest(server).get("/projects");
      expect(res.status).toBe(200);
    });
  });

  describe("POST /projects", () => {
    it("should return status 500", () => {
      return supertest(server)
        .post("/projects")
        .then((res) => {
          expect(res.status).toBe(500);
        });
    });

    it("should return json", async () => {
      const res = await supertest(server).post("/projects");
      expect(res.body).not.toBeFalsy();
    });

    it("should return status 201", async () => {
      const res = await supertest(server).post("/projects").send({
        project_name: "test project",
        description: "a test project description",
      });
      expect(res.status).toBe(201);
    });
    it("should return json", async () => {
      const res = await supertest(server).post("/projects").send({
        project_name: "test project",
        description: "a test project description",
      });
      expect(res.status).not.toBeFalsy();
    });
  });

  describe("DELETE /projects", () => {
    it("should return status 404", async () => {
      const res = await supertest(server).delete("/projects/50");
      expect(res.status).toBe(404);
    });

    it("should return json", async () => {
      const res = await supertest(server).delete("/projects/50");
      expect(res.status).not.toBeFalsy();
    });
  });
});
