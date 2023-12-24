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

const CONNECTION =process.env.MONGODB_CONNECTION;
mongoose.set("strictQuery", true);
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`✅ Connected database from mongodb.\n Listening at Port ${PORT}`)))
  .catch((error) => console.log(`❌ Connect database is failed with error which is ${error}`));

// Initialize the Telegram bot
const botToken = '6693408491:AAE5sYV3YThRwOI3yTjfa1zEKfVg1r5DWRw'; // Replace with your actual bot token
const bot = new TelegramBot(botToken, { polling: true });

// Middleware to send a Telegram message
const sendTelegramMessage = (chatId, message) => {
  bot.sendMessage(chatId, message)
    .then(() => console.log('Message sent to Telegram'))
    .catch(error => console.error('Error sending message to Telegram:', error));
};

setInterval(() => {
  const chatId = -4089535163;
  const message = `BACKEND-CONSUMER-DR-42-22_TEST getProductsByShowcase getProductDetailsByShowcaseParam {"agent_ref":"03727721${Math.floor(Math.random() * 101)}","limit":9,"page":1,"is_filter":false,"org_types":["RETAILER"],"channel":"CONSUMER","request_status":[2,4],"data":{"all":[{"fact":"CATEGORY","value":[464],"path":"category.ids","operator":"contains"}]},"type":3,"location":{"lng":106.658337,"lat":10.794317},"radius":2,"province_name":"Thành phố Hồ Chí Minh","is_filter_location":false,"fixed_skus":[],"partner_code":"TITKUL"} 0372779917 1701664255335 take 8817`;
  sendTelegramMessage(chatId, message);
}, 20000);

setInterval(() => {
  const chatId = -4089535163;
  const message = `
      LOGGER Unhandled Rejection /queue/CONSUMER_TELEGRAM_BOT_BACKEND-CONSUMER-DR-42-22_TEST " Error\n    at PartnerRfService.<anonymous> (/app/application/finviet/eco-consumer/dist/appsqc/consumers/main.js:7768:23)\n    at Generator.throw (<anonymous>)\n    at rejected (/app/application/finviet/eco-consumer/node_modules/tslib/tslib.js:115:69)\n    at runMicrotasks (<anonymous>)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)"`;
  sendTelegramMessage(chatId, message);
}, 690000);

setInterval(() => {
  const chatId = -4089535163;
  const message = `
      BACKEND-CONSUMER-DR-42-22_TEST getProductsByShowcase getProductDetailsByShowcaseParam {"agent_ref":"0372779917","limit":7,"page":1,"is_filter":false,"org_types":["RETAILER"],"channel":"CONSUMER","request_status":[2,4],"data":{"all":[{"fact":"SKU","value":["SKUP82924V213412","SKUP82924V213415","SKUP83176V214810","SKUP83536V216822","SKUP83536V216825","SKUP83536V216831","SKUP83545V216876","SKUP83551V216930","SKUP83551V216936","SKUP83551V216942","SKUP83557V216993","SKUP83557V216999","SKUP83572V217122","SKUP83572V217128","SKUP83572V217140","SKUP83614V217347","SKUP83614V217356","SKUP83614V217362","SKUP83644V217521","SKUP83644V217527","SKUP83644V217533","SKUP83647V217545","SKUP83866V218475","SKUP83866V218481","SKUP83869V218496","SKUP83878V218544","SKUP83878V218550","SKUP83878V218556","SKUP83878V218562","SKUP83977V219057","SKUP83980V219069","SKUP84022V219252","SKUP84025V219264","SKUP86766V225056","SKUP86793V225152","SKUP87294V225395","SKUP87294V225398","SKUP86844V225743","SKUP86844V225746","SKUP86844V225752","SKUP86844V225755","SKUP86859V225932","SKUP86859V225935","SKUP86859V225941","SKUP86859V225944","SKUP83974V229985","SKUP87818V230461","SKUP87818V230464","SKUP87818V230473","SKUP87818V230476","SKUP87887V230776","SKUP87887V230779","SKUP87887V230785","SKUP87887V230788","SKUP87887V230794","SKUP87887V230797","SKUP87887V230809","SKUP87887V230812","SKUP89462V234389","SKUP89462V234398","SKUP89517V234669","SKUP91213V243043","SKUP91213V243049","SKUP91219V243121","SKUP91219V243130","SKUP91291V243508","SKUP92608V249493","SKUP92608V249496","SKUP94222V255250","SKUP94222V255253","SKUP94750V256960","SKUP94750V256963","SKUP93808V269353","SKUP93808V269356","SKUP98254V269638","SKUP98692V270142","SKUP100756V278077","SKUP106338V289788","SKUP106338V289791","SKUP87818V302175","SKUP87818V302178","SKUP90185V302193","SKUP90185V302196","SKUP90185V302199","SKUP114181V325969","SKUP114184V325972","SKUP114190V325993","SKUP114178V325966"],"path":"sku.ids","operator":"contains"}]},"type":3,"location":{"lng":106.658337,"lat":10.794317},"radius":2,"province_name":"Thành phố Hồ Chí Minh","is_filter_location":false,"fixed_skus":["SKUP87887V230812","SKUP93808V269353","SKUP82924V213412","SKUP83551V216930","SKUP83572V217122"],"partner_code":"TITKUL"} 0372779917 1701664032018 take 10743
`;
  sendTelegramMessage(chatId, message);
}, 6000000);



app.use('/auth', AuthRoute);
app.use('/user', UserRoute)
app.use('/posts', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)
app.use('/', (req, res) => {
  res.send("Server is running");
});