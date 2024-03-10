const jwt = require("jsonwebtoken");

async function Authenticate(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.authToken;

    console.log({token});
    if (token) {
      jwt.verify(token, process.env.JWTPRIVATEKEY, {}, (err, userData) => {
        if (err) {
          reject(err);
        } else {
          resolve(userData);
        }
      });
    } else {
      reject("no token");
    }
  });
}

module.exports = Authenticate;
