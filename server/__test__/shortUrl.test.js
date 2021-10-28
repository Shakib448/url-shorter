import supertest from "supertest";
import app from "../app";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Short url testing", () => {
  it("It should response the GET method", async () => {
    const res = await supertest(app).get("/api/shortUrl");
    expect(res.status).toEqual(200);
  });
});
