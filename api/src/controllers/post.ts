import { PostDocument, Post } from "../models/Post";
import { Request, Response, NextFunction } from "express";

export const getPost = (req: Request, res: Response,  next: NextFunction) => {
  Post.findOne({ _id: req.params.postId }, (err, post) => {
    if (err) { return next(err); }
    if (post) {
      return res.send(post);
    }
  });
};

export const addNewPost = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const post = new Post(req.body);
  post.save((err) => {
    if (err) { return next(err); }
    return res.send("ok");
  });
};