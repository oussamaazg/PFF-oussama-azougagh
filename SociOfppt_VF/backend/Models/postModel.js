import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: { type: String, required: true },
    likes: [],
    image: String,
    video:{
      type:String,
    },
    tags:String,
    profile:String,
    createdBy:String,
    comments: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          required: true
        },
        firstname: {
          type: String,
          required: true
        },
        lastname: {
          type: String,
          required: true
        },
        profilePicture: {
          type: String
        },
        comment: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;
