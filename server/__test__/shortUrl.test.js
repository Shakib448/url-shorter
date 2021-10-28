import supertest from "supertest";
import app from "../app";
describe("Short url testing", () => {
  it("It should response the GET method", async () => {
    const res = await supertest(app).get("/api/shortUrl");
    expect(res.status).toEqual(200);
  });
});
