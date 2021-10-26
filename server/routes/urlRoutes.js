import express from "express";
import { createShortUrl, getShortUrls } from "../controllers/urlControllers";

const router = express.Router();

router.post("/", createShortUrl).get("/", getShortUrls);

export default router;
