import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";

export type PostDocument = mongoose.Document & {
  title: string,
  teaser: string,
  cover: string,
  excerpt: string,
  author: string,
  date: Date
};

const postSchema = new mongoose.Schema({
  title: String,
  teaser: String,
  cover: String,
  date: Date,
  excerpt: String,
  author: String,
  body: String
}, { timestamps: true });

export const Post = mongoose.model<PostDocument>("Post", postSchema);
