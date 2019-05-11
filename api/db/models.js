import mongoose from 'mongoose';

import Post from './post';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Post };

export { connectDb };

export default models;
