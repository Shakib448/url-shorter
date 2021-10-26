import express from "express";
import {
  createShortUrl,
  getShortUrls,
  deleteShortUrl,
} from "../controllers/urlControllers";

const router = express.Router();

router.post("/", createShortUrl).get("/", getShortUrls);
router.delete("/:id", deleteShortUrl);

export default router;
