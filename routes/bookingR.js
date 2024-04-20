import express from 'express'
const router = express.Router

import {getAllBooking, getBookingById, cancelBooking, createBooking, updateBooking } from '../controller/bookingC'

router.route('/').get(getAllBooking).get(createBooking)
router.route('/:id').patch(updateBooking).delete(cancelBooking).get(getBookingById)

export default router; 