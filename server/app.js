import dotenv from "dotenv";
import connectDB from "./config/db";
import urlRoutes from "./routes/urlRoutes";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/shortUrl", urlRoutes);

export default app;
