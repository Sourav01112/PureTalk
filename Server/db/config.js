const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.mongoURL;

var connection = mongoose.connect(uri, { maxPoolSize: 1000 });

module.exports = { connection };