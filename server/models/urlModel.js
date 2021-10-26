import mongoose from "mongoose";
import { nanoid } from "nanoid";

const shortUrlSchema = new mongoose.Schema(
  {
    fullUrl: { type: String, required: true },
    shortUrl: {
      type: String,
      required: true,
      default: () => nanoid(7),
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

export default ShortUrl;
