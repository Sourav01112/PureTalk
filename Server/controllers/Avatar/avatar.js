const AvatarModel = require("../../models/avatar.model");

async function AvatarRoute(req, res) {
  const { imgLink } = req.body;

  if (!imgLink) {
    return res.status(400).json({ error: "Link is required" });
  }

  try {
    const newAvatar = new AvatarModel({ imgLink });
    await newAvatar.save();

    return res
      .status(201)
      .json({ success: true, message: "Avatar link added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllAvatars(req, res) {
  try {
    const avatars = await AvatarModel.find();

    return res.status(200).json({ success: true, avatars });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { AvatarRoute, getAllAvatars };
