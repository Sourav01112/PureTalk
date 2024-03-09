const bcrypt = require("bcrypt");
const { UserModel, validateRegister } = require("../models/user.model.js");
const { TokenModel } = require("../models/token.model.js");
const crypto = require("crypto");
const { Fail } = require("../utils/helper.js");
const SendEmail = require("../utils/sendEmail.js");

const registerController = async (req, res) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;

  try {
    // const { error } = validateRegister(req.body);

    // if (error) {
    //     return Fail(true, error.details[0].message, res, 404)
    // }

    let userExists = await UserModel.findOne({ email: email });

    // if(userExists){
    //     return Fail(true, 'User with given email already exists', res, 409)

    // }
    console.log({ userExists });

    if (userExists && user.verified) {
      return Fail(true, "User with given email already exists", res, 409);
    } else if (userExists && userExists.verificationLinkSent) {
      return Fail(
        true,
        "A verification link has been already sent to this Email",
        res,
        400
      );
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    console.log({ salt });
    const hashedPass = await bcrypt.hash(password, salt);
    console.log({ hashedPass });

    const newUser = new UserModel({ ...req.body, password: hashedPass });
    console.log({ newUser });
    await newUser.save();

    // return

    const token = new TokenModel({
      userId: newUser._id,
      token: crypto.randomBytes(16).toString("hex"),
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    });
    console.log({ token });

    await token.save();

    const url = `${process.env.BASE_URL}/users/${newUser._id}/verify/${token.token}`;

    console.log("url", url);

    await SendEmail(newUser.email, "Verify Email", url);

    newUser.verificationLinkSent = true;
    await newUser.save();
    res
      .status(201)
      .send({ message: `Verification Email Sent to ${newUser.email}` });
    // Response
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = registerController;
