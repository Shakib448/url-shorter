import express from "express";
import {
  createShortUrl,
  getShortUrlByParam,
  getShortUrls,
} from "../controllers/urlControllers";

const router = express.Router();

router.post("/", createShortUrl).get("/", getShortUrls);
router.get("/:shortUrl", getShortUrlByParam);

export default router;
