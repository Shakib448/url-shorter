import supertest from "supertest";
import createServer from "../utils/server";

const app = createServer();
describe("", () => {
  test("It should response the GET method", async () => {
    const res = await supertest(app).get("/api/shortUrl");
    expect(res.statusCode).toBe(200);
  });
});
