import express from 'express'
import passport from '../middleware/google-passport'


const router = express.Router()

router.get('/google',
  passport.authenticate(
    'google',
    {scope: ['profile']}
  )
)

router.get('/google/callback',
  passport.authenticate(
    'google',
    {
      failureRedirect: '/',
      session: false
    }
  ),
  function (req, res) {
    res.cookie('accessToken', req.user.accessToken, { expires: 0 })
    res.redirect('/#/trails')
  }
)

export default router
