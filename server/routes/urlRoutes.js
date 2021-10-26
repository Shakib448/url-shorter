import express from "express";
import { createShortUrl, getShortUrl } from "../controllers/urlControllers";

const router = express.Router();

router.post("/", createShortUrl);
router.get("/:shortUrl", getShortUrl);

export default router;
