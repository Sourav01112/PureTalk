const jwt = require("jsonwebtoken");
const { UserModel } = require("../../models/user.model");

const profile = async (req, res) => {
    console.log("{ req }", req.cookies)
    const cookieToken = req?.cookies?.authToken;
    console.log("zzzz++++", req.cookies?.authToken);

    //   return 
    if (cookieToken) {
        jwt.verify(cookieToken, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
            console.log(userData);
            if (err) throw err;
            // res.json(userData);
            // console.log(userData);
            const user = await UserModel.findOne({ _id: userData._id });
            res.json(user);
        });
    } else {
        res.status(401).json("no token");
    }
};

const profileUpdate = async (req, res) => {
    const cookieToken = req.cookies?.authToken;

    var userData;

    if (cookieToken) {
        jwt.verify(cookieToken, process.env.JWTPRIVATEKEY, {}, (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: "Token verification failed" });
            }
            userData = decodedToken;
        });
    } else {
        return res.status(401).json("no token");
    }

    if (!userData) {
        return res.status(401).json({ message: "User data not available" });
    }


    const updatedUser = await UserModel.findOneAndUpdate(
        { _id: userData._id },
        { $set: req.body },
        { new: true }
    );

    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


module.exports = { profile, profileUpdate };
