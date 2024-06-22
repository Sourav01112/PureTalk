require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/config.js");
const cookieParser = require("cookie-parser");
const path = require("path");
const ip = require("ip");
const { corsOptions } = require("./utils/helper.js");
const port = process.env.PORT || 8000;
const userRouter = require("./routes/user.routes.js");
const createWebSocketServer = require("./websocket/wsServer.js");
const MessageRouter = require('./routes/message.routes.js')
const AvatarRouter = require('./routes/avatar.routes.js')



// Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors(corsOptions));
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin
  credentials: true // Allow credentials (cookies)
}));

app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

//  Routes Definition
app.use("/api/user", userRouter);
app.use("/api/chat", MessageRouter);
app.use("/api/avatar", AvatarRouter);



//  HTTP Server 
const server = app.listen(port, async () => {
  try {
    await connection;
    console.log("Mogno Atlas Connected");
    console.log(`Sever is running at ${port}`);
  } catch (error) {
    console.log("error", error);
    console.log("Mongo connection error");
  }
});

//  WS
createWebSocketServer(server)

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"), (err) => {
    if (err) {
      console.error("Error sending file:", err);
    }
  });
});

console.log("app is running on ip " + ip.address());
