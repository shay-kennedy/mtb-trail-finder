import express from 'express'
import passport from '../middleware/bearer-passport'
import { User } from '../models'


const router = express.Router()

router.get('/logout',
  function(req, res) {
    req.logout()
    res.redirect('/')
  }
)

router.get('/',
  passport.authenticate(
    'bearer',
    { session: false }
  ),
  function (req, res) {
    const googleID = req.user.googleID
    User.findOne( { googleID: googleID } )
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

router.put('/favorites/add/:googleID',
  passport.authenticate(
    'bearer',
    {session: false}
  ),
  function(req, res) {
    User.findOneAndUpdate(
      { 'googleID':req.params.googleID },
      { $addToSet : { 'favorites':req.body.favorites } },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

router.put('/favorites/remove/:trail_id',
  passport.authenticate(
    'bearer',
    {session: false}
  ),
  function(req, res) {
    const trailID = parseInt(req.params.trail_id)
    const googleID = req.body.googleID
    User.findOneAndUpdate(
      { 'favorites.trail_id':trailID, 'googleID':googleID },
      { $pull : { 'favorites': { 'trail_id':trailID } } },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

export default router
