import express from 'express'
const router = express.Router

import {getAllVenues, getVenueById, deleteVenue, createVenue, updateVenue } from '../controller/venueC'

router.route('/').get(getAllVenues).get(createVenue)
router.route('/:id').patch(updateVenue).delete(deleteVenue).get(getVenueById)

export default router; 