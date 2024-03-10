const express = require('express');
const messageRoute = require('../controllers/Message/message');
const router = express.Router();


router.post("/messages", messageRoute);



module.exports = router;
