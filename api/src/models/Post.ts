import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";

export type PostDocument = mongoose.Document & {
  title: string,
  teaser: string,
  cover: string,
  excerpt: string,
  date: Date
};

// type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

// export type AuthToken = {
//   accessToken: string,
//   kind: string
// };

const postSchema = new mongoose.Schema({
  title: String,
  teaser: String,
  cover: String,
  date: Date,
  excerpt: String,
  body: String
}, { timestamps: true });

/**
 * Password hash middleware.
 */
// postSchema.pre("save", function save(next) {
//   const user = this as PostDocument;
//   if (!user.isModified("password")) { return next(); }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) { return next(err); }
//     bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
//       if (err) { return next(err); }
//       user.password = hash;
//       next();
//     });
//   });
// });

// const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
//     cb(err, isMatch);
//   });
// };

// userSchema.methods.comparePassword = comparePassword;

/**
 * Helper method for getting user's gravatar.
 */
// userSchema.methods.gravatar = function (size: number = 200) {
//   if (!this.email) {
//     return `https://gravatar.com/avatar/?s=${size}&d=retro`;
//   }
//   const md5 = crypto.createHash("md5").update(this.email).digest("hex");
//   return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
// };

export const Post = mongoose.model<PostDocument>("Post", postSchema);
