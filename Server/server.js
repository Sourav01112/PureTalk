require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/config.js");
const cookieParser = require('cookie-parser')
const path = require("path");

//database connection
connection();
app.use(express.json())
app.use(cookieParser())

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
  });
  

//middlewares
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4000",
];


const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	optionsSuccessStatus: 204,
	credentials: true, // Allow credentials like cookies
};
app.use(cors(corsOptions)); 

const port = process.env.PORT || 8000;
const server = app.listen(port, () => console.log(`Application Running on Port ${port}`));

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), (err) => {
		if (err) {
			console.error('Error sending file:', err);
		}
	});
});