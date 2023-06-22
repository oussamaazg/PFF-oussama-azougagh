import express from 'express'
import { createChat, findChat, userChats,toChat } from  '../Controllers/ChatController.js';
const router = express.Router()

router.post('/', createChat);
router.get('/:userId', userChats);
router.get('/find/:firstId/:secondId', findChat);
router.get('/:chatId', toChat);
export default router