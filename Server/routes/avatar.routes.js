const express = require('express');
const { AvatarRoute, getAllAvatars } = require('../controllers/Avatar/avatar');

const router = express.Router();

router.post("/createAvatar", AvatarRoute);
router.get("/getAllAvatar", getAllAvatars);

module.exports = router;
