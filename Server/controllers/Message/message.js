const Authenticate = require("../../middleware/auth");
const MessagesModel = require("../../models/message.model");


const messageRoute = async (req, res) => {
    const { userId } = req.query;
    const userData = await Authenticate(req);
    const idFromMiddleware = userData._id;

    const messages = await MessagesModel.find({
        $or: [
            { sender: idFromMiddleware },
            { recipient: idFromMiddleware },
            { sender: userId },
            { recipient: userId }
        ]
    }).sort({ createdAt: 1 });
    
    console.log("Messages", messages);
    res.json(messages);
};

module.exports = messageRoute;
