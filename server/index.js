import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import TelegramBot from 'node-telegram-bot-api';

// routes
import AuthRoute from './routes/AuthRoute.js'
import UserRoute from './routes/UserRoute.js'
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'
import ChatRoute from './routes/ChatRoute.js'
import MessageRoute from './routes/MessageRoute.js'
import TelegramRoute from './routes/TelegramRoute.js'


const app = express();


// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(express.static('public'));
app.use('/images', express.static('images'));


dotenv.config();
const PORT = process.env.PORT;

const CONNECTION = process.env.MONGODB_CONNECTION;
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`✅ Connected database from mongodb.\n Listening at Port ${PORT}`)))
  .catch((error) => console.log(`❌ Connect database is failed with error which is ${error}`));

// Initialize the Telegram bot
const botToken = '6693408491:AAE5sYV3YThRwOI3yTjfa1zEKfVg1r5DWRw'; // Replace with your actual bot token
const bot = new TelegramBot(botToken, { polling: false });

// Middleware to send a Telegram message
const sendTelegramMessage = (chatId, message) => {
  bot.sendMessage(chatId, message)
    .then(() => console.log('Message sent to Telegram'))
    .catch(error => console.error('Error sending message to Telegram:', error));
};

setTimeout(() => {
  const chatId = -4089535163;
  const message = `Start Server: ${process.env.HOST_NAMEA || "Social Media Fullstask"}`;
  sendTelegramMessage(chatId, message);
}, 10000);


app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)

app.use('/telegram', TelegramRoute)
app.use('/', (req, res) => {
  res.send("Server is running");
});