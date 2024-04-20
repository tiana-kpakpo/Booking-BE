import expres from 'express'
const router = express.Router()

import { getUsers, createUser, updateUser, deleteUser, loginUser, logoutUser} from '../controller/userC.js'

router.route('/').get(getUsers).post(createUser)
router.route('/:id').patch(updateUser).delete(deleteUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)

export default router;