import express from 'express'
import unirest from 'unirest'
import passport from '../middleware/bearer-passport'
import config from '../../config'


const router = express.Router()

router.get('/:city/:state',
  function(req, res) {
    const { city, state} = req.params
    unirest.get(`https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=mountain+biking&q[city_cont]=${city}&q[state_cont]=${state}&radius=50`)
           .header('X-Mashape-Key', process.env.MASHAPE_KEY || config.mashape_key)
           .header('Accept', 'text/plain')
           .end(result => res.send(result.body.places))
  }
)

export default router
