const bcrypt = require("bcrypt");
const { UserModel, validateLogin } = require("../../models/user.model");

const loginController = async (req, res) => {


  console.log(req.body)

  try {
    const { error } = validateLogin(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Find the user by email
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: "Invalid Email" });
    }

    // Check password validity using bcrypt
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // Check if the user's email is verified
    if (!user.verified) {
      return res.status(400).send({ message: "Email Verification is still pending" });
    }

    else if (!validPassword) {
      return res.status(401).send({ message: "Invalid Password" });
    }


    // Generate authentication token and send successful login response
    const token = user.generateAuthToken();

    let cookieOption = {
      httpOnly: true,
      sameSite: 'None',
      secure: false,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }

    // if ((process.env.NODE_ENV == "production")) cookieOption.secure = true

    res.cookie("authToken", token, cookieOption)

    res
      .status(200)
      .send({ message: "Login successful", status: 200 });
    return;
  } catch (error) {
    console.error("Error in loginController:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = loginController;
