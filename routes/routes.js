import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import DestinationsController from '../controllers/destinations.js';

router.get('/', HomeController);
router.get('/destinations', DestinationsController);

export default router;