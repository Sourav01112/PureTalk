const { UserModel } = require("../../models/user.model");

const chatPartners = async (req, res) => {
  const users = await UserModel.find({ verified: true });

const usersWithoutPass = users.map((user) => {
    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  })


  res.json(usersWithoutPass);
};

module.exports = chatPartners;
