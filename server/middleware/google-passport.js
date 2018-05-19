import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import config from '../../config'
import { User } from '../models'

passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENTID || config.googleAuth.clientID,
    clientSecret: process.env.CLIENTSECRET || config.googleAuth.clientSecret,
    callbackURL: process.env.CALLBACKURL || config.googleAuth.callbackURL,
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne(
      { googleID: profile.id })
      .catch(err => done(err))
      .then(user => {
        if (!user) {
          User.create(
            {
              googleID: profile.id,
              accessToken: accessToken,
              favorites: [],
              fullName: profile.displayName
            })
            .catch(err => done(err))
            .then(newUser => done(null, newUser))
        } else {
          return done(null, user)
        }
      })
  }
))

export default passport