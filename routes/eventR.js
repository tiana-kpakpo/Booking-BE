import expres from 'express'
const router = express.Router()

import { getAllEvents, createEvent, getEventById, updateEvent, deleteEvent, getEventsByTag} from '../controller/eventC.js'

router.route('/').get(getAllEvents).post(createEvent)
router.route('/:id').patch(updateEvent).delete(deleteEvent).get(getEventById)
router.route('/byTag/:tagName').get(getEventsByTag)

export default router;