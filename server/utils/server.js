import express from "express";
import cors from "cors";

export default function createServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  return app;
}
