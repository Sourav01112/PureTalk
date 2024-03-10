const mongoose = require("mongoose");

const AvatarSchema = new mongoose.Schema(
  {
    imgLink: {
      type: String,
      required: true,
      default: "https://cdn.iconscout.com/icon/premium/png-512-thumb/user-avatar-4425836-3668056.png?f=webp&w=512",
    },
  },
  { timestamps: true }
);

const AvatarModel = mongoose.model("Avatar", AvatarSchema);

module.exports = AvatarModel;
