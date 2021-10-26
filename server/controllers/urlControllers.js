import asyncHandler from "express-async-handler";
import { models } from "mongoose";
import ShortUrl from "../models";

// @desc    Create new url
// @route   POST /api/url/shortUrl
// @access  Public
export const createShortUrl = asyncHandler(async (req, res) => {
  const { shortUrl } = req.body;
  if (shortUrl) {
    await shortUrl.create({ fullUrl: shortUrl });
  }
  res.json({ message: "Successfully url created" });
});
