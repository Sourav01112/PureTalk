const express = require('express');
const router = express.Router();
const registerController = require('../controllers/User/register');
const loginController = require('../controllers/User/login');
const EmailVerification = require('../controllers/User/EmailVerification');
const chatPartners = require('../controllers/User/chatPartners');
const { profile, profileUpdate } = require('../controllers/User/profile');


router.post("/register", registerController);
router.post("/login", loginController);
router.post("/:id/verify/:token", EmailVerification);
router.get("/chat-partners", chatPartners);
router.get("/profile", profile);
router.post("/profile/update", profileUpdate);



module.exports = router;
