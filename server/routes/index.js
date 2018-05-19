import auth from './auth'
import user from './user'
import trails from './trails'
import express from 'express'


const router = express.Router()

router.use('/auth', auth)
router.use('/user', user)
router.use('/trails', trails)

export default router
