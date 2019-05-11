import mongoose from 'mongoose';

import Post from './post';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Post };

/* title: {
    type: String,
  },
  md: {
    type: String,
  },
  postId: {
    type: String,
    unique: true
  },
  date: {
    type: Date
  }
  */

const createPosts = async () => {
  const post1 = new models.Post({
    title: 'One Calendar',
    md: ``
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  await message1.save();

  await user1.save();
};

export { connectDb };

export default models;
