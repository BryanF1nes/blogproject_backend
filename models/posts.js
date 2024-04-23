const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  body: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Active", "Removed"],
    default: "Pending",
  },
  date_created: { type: Date, default: Date.now },
});

PostSchema.virtual("url").get(() => {
  return `/post/${this._id}`;
});

module.exports = mongoose.model("Post", PostSchema);
