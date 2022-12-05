import express from 'express';
const router = express.Router();

import HomeController from '../controllers/home.js';
import DestinationsController from '../controllers/destinations.js';
import ReservationsController from '../controllers/reservations.js';
import ContactController from '../controllers/contact.js';

router.get('/', HomeController);
router.get('/destinations', DestinationsController);
router.get('/reservations', ReservationsController)
router.get('/contact', ContactController)

export default router;