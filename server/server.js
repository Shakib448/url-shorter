import dotenv from "dotenv";
import connectDB from "./config/db";
import urlRoutes from "./routes/urlRoutes";
import createServer from "./utils/server";

const PORT = process.env.PORT || 5000;

const app = createServer();

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/shortUrl", urlRoutes);

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
