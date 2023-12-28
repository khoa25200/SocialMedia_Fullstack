import express from 'express';
import { sendTelegram } from '../controllers/TelegranController.js';

const router = express.Router();

router.post('/', sendTelegram);


export default router