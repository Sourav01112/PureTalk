const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const MessagesModel = mongoose.model("Message", MessageSchema);

module.exports = MessagesModel;
