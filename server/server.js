import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

// Body parser
app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
