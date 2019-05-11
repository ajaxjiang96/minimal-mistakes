import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
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
});

// userSchema.statics.findByLogin = async function (login) {
//   let user = await this.findOne({
//     username: login,
//   });

//   if (!user) {
//     user = await this.findOne({ email: login });
//   }

//   return user;
// };


const Post = mongoose.model('Post', postSchema);

export default Post;