import asyncHandler from "express-async-handler";
import ShortUrl from "../models/urlModel";

// @desc    Create new url
// @route   POST /api/url/shortUrl
// @access  Public
export const createShortUrl = asyncHandler(async (req, res) => {
  const { fullUrl } = req.body;
  if (fullUrl) {
    await ShortUrl.create({ fullUrl });
  }
  res.json({ message: "Successfully url created" });
});
