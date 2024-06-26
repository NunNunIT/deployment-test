import mongoose from "mongoose";
import { createSlug } from "../utils/createSlug.js";

const articleSchema = new mongoose.Schema(
  {
    article_name: {
      type: String,
      required: true
    },
    article_slug: {
      type: String,
    },
    article_type: {
      type: String,
      required: true,
    },
    article_short_description: String,
    article_info: {
      author: String,
      published_date: Date,
    },
    article_description: [
      {
        type: {
          type: String,
          required: true,
        },
        content: String,
        url: String,
        alt: String,
        caption: String,
        article_date: Date,
      },
    ],
  },
  { timestamps: true }
);

// Middleware để tạo slug từ article_title trước khi lưu vào cơ sở dữ liệu
articleSchema.pre('save', function(next) {
  this.article_slug = createSlug(this.article_name);
  next();
});

const Article = mongoose.model("Article", articleSchema);
export default Article;
