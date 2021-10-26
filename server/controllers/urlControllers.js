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
      res.status(400).json({ message: "Something went wrong" });
    }
  }
});

// @desc    Get Url
// @route   Get /api/url/shortUrl
// @access  Public
export const getShortUrls = asyncHandler(async (req, res) => {
  const shortUrls = await ShortUrl.find({}).select("-updatedAt");

  res.send(shortUrls);
});

// @desc    Delete Url
// @route   Get /api/url/:id
// @access  Public
// @Description Delete User
// @routes GET/api/users/:id
// @access Private/Admin

export const deleteShortUrl = asyncHandler(async (req, res) => {
  const url = await ShortUrl.findById(req.params.id);

  if (url) {
    const removeUrl = await url.remove();
    res.json({ message: "Url removed" });
    return removeUrl;
  } else {
    res.status(404);
    throw new Error("Url not found");
  }
});
