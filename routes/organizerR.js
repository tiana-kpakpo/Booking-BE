import expres from 'express'
const router = express.Router()

import { getOrganizers, getOrganizerById, createOrgaizer, updateOrganizer, deleteOrganizer, loginOrganizer, logoutOrganizer} from '../controller/organizerC.js'

router.route('/').get(getOrganizers).post(createOrgaizer)
router.route('/:id').patch(updateOrganizer).delete(deleteOrganizer).get(getOrganizerById)
router.route('/login').post(loginOrganizer)
router.route('/logout').post(logoutOrganizer)

export default router;