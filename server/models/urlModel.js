import mongoose from "mongoose";
import shortId from "shortid";

const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: { type: String, required: true },
  },
  {
    shortUrl: { type: String, required: true, default: shortId.generate },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

export default ShortUrl;
