import asyncHandler from "express-async-handler";
import ShortUrl from "../models/urlModel";

// @desc    Create new url
// @route   POST /api/url/shortUrl
// @access  Public
export const createShortUrl = asyncHandler(async (req, res) => {
  const { fullUrl } = req.body;

  if (fullUrl) {
    await ShortUrl.create({ fullUrl });
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

// @desc    Get Url
// @route   Get /api/url/shortUrl/:shotUrl
// @access  Public
export const getShortUrl = asyncHandler(async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ shortUrl: req.params.shortUrl });
  if (shortUrl === null) return res.sendStatus(404);

  res.redirect(shortUrl.fullUrl);
});
