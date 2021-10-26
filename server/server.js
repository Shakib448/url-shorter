import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/shortUrl", urlRoutes);

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
