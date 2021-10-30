import supertest from "supertest";
import app from "../app";
import time from "../utils/time";
import sinon from "sinon";

sinon.stub(time, "setTimeout");
describe("Short url testing", () => {
  it("It should response the GET method", async () => {
    const res = await supertest(app).get("/api/shortUrl");
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toEqual(1);
  });
});
