const server = require("./server");
const supertest = require("supertest");

describe("server", () => {
  describe("GET /projects", () => {
    it("should return list of projects", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  // describe("POST /projects", () => {
  //   it("should return status 500", () => {
  //     return supertest(server)
  //       .post("/projects")
  //       .then((res) => {
  //         expect(res.status).toBe(500);
  //       });
  //   });
  // });
});
