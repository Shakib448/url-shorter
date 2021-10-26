import express from "express";
import { createShortUrl } from "../controllers/urlControllers";

const router = express.Router();

router.post("/", createShortUrl);

export default router;
