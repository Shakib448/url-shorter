import asyncHandler from "express-async-handler";
import ShortUrl from "../models/urlModel";

// @desc    Create new url
// @route   POST /api/url/shortUrl
// @access  Public
export const createShortUrl = asyncHandler(async (req, res) => {
  const { fullUrl } = req.body;

  const urlExists = await ShortUrl.findOne({ fullUrl });
  if (urlExists) {
    res.status(400).json({
      message: "Url already exists",
    });
  } else {
    const url = await ShortUrl.create({ fullUrl });
    if (url) {
      res.status(201).json({
        message: "Url Created Successfully",
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
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
