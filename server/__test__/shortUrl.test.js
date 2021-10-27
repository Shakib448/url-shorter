import supertest from "supertest";
import express from "express";

const app = express();
describe("", () => {
  test("It should response the GET method", async () => {
    await supertest(app).get("/api/shortUrl").toBe(200);
  });
});
