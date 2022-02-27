import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  description: String,
  likes: Number,
  messages: Number,
  shares: Number,
});

export default mongoose.model("tiktokVideos", tiktokSchema);
Number;
