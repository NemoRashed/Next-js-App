import mongoose from "mongoose";

const storySchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const story = mongoose.model.story || mongoose.model("story", storySchema);

export default story;
