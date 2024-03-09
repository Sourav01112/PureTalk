require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/config.js");
const cookieParser = require('cookie-parser')
const path = require("path");
const ip = require('ip')
const { corsOptions } = require("./utils/helper.js");
const port = process.env.PORT || 8000;
const userRouter = require('./routes/user.routes.js')

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions)); 
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
  });
  app.use('/api/user', userRouter)
  

//middlewares
app.use(express.json());



const server = app.listen(port, async () => {
	try {
	  await connection;
	  console.log("Mogno Atlas Connected");
	console.log(`Sever is running at ${port}`);
  
	} catch (error) {
	  console.log("error", error)
	  console.log("Mongo connection error");
	}
  });

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/dist/index.html'), (err) => {
		if (err) {
			console.error('Error sending file:', err);
		}
	});
});


console.log("app is running on ip " + ip.address())
