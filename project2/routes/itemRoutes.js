// routes/itemRoutes.js
import express from 'express';
import { createItem } from '../controllers/itemController.js';

const router = express.Router();

router.post('/items', createItem); // CREATE route

export default router;
