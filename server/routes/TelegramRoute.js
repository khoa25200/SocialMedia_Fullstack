import express from 'express';
import { sendTelegram, sendTelegramClientInfo } from '../controllers/TelegranController.js';

const router = express.Router();

router.post('/', sendTelegram);
router.post('/device-info', sendTelegramClientInfo)

export default router