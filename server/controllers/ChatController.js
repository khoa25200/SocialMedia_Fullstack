import ChatModel from "../models/chatModel.js";

export const createChat = async (req, res) => {
  try {
    const data = {
      members: [req.body.senderId, req.body.receiverId],
    }
    const checkChat = await ChatModel.findOne(data)
    if (!checkChat) {
      const newChat = new ChatModel(data);
      const result = await newChat.save();
      res.status(200).json(result);
    }
    else {
      res.status(200).json({
        message: 'Chat has been created'
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat)
  } catch (error) {
    res.status(500).json(error)
  }
};