import passport from 'passport'
import { Strategy as BearerStrategy } from 'passport-http-bearer'
import { User } from '../models'


passport.use(new BearerStrategy(
  function (token, done) {
    User.findOne({ accessToken: token })
      .catch(err => done(err))
      .then(user => {
        if (!user) return done(null, false)
        return done(null, user, { scope: 'read' })
      })
  }
))

export default passport
