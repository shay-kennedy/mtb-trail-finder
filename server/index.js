// import 'babel-polyfill';
import express from 'express';
import mongoose from 'mongoose';
// Used for API request
import unirest from 'unirest';

const app = express();
app.use(express.static(process.env.CLIENT_PATH));

// Passport strategies
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
import { Strategy as AnonymousStrategy } from 'passport-anonymous';

var passport = require("passport");
var bodyParser = require("body-parser");

// User model schema
var User = require('./models/user');

try {
  var config = require('../config');
} catch (e) {};

// Setup for DB connection
// var db = 'mongodb://localhost:27017/mtb-trails';
var db = process.env.DBPATH || config.mongoDB.dbPath;
mongoose.connect(db);

app.use(passport.initialize());
// app.use('/', express.static('build'));
app.use(bodyParser.json());

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID || config.googleAuth.clientID,
  clientSecret: process.env.CLIENTSECRET || config.googleAuth.clientSecret,
  callbackURL: process.env.CALLBACKURL || config.googleAuth.callbackURL,
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({googleID: profile.id}, function(err, user) {
      if (!user) {
        User.create({
          googleID: profile.id,
          accessToken: accessToken,
          favorites: [],
          fullName: profile.displayName
        }, function(err, users) {
          return done(err, users);
        });
      } else {
        return done(err, user);
      }
    });
}));

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }),
  function(req, res) {
    res.cookie('accessToken', req.user.accessToken, {expires: 0});
    res.redirect('/#/trails');
  }
);

// Bearer Strategy
passport.use(new BearerStrategy(
  function(token, done) {
  User.findOne({ accessToken: token },
    function(err, users) {
      if(err) {
          return done(err)
      }
      if(!users) {
          return done(null, false)
      }
      return done(null, users, { scope: 'read' })
    }
  );
}
));

// Anonymous Strategy
passport.use(new AnonymousStrategy());

// GET: Logs user out, ends their session and redirects then to the login endpoint
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// GET: Retrieves entire user object
app.get('/user', passport.authenticate(['bearer', 'anonymous'], {session: false}), function(req, res) {
  var googleID = req.user.googleID;
  User.find({googleID: googleID}, function(err, users) {
    if (err) {
      res.json({anonymous: true})
    } else {
      res.json(users);
    }
  });
});

// PUT: Add to favorites (avoids duplicates)
app.put('/user/:googleID', passport.authenticate(['bearer', 'anonymous'], {session: false}),
  function(req, res) {
    User.findOneAndUpdate({ 'googleID':req.params.googleID }, 
                  { $addToSet : { 'favorites':req.body.favorites } },
                  {new: true},
      function(err, users) {
        if(err) {
          return res.send(err)
        }
        return res.json(users);
      });
  });

// PUT: Remove from favorites
app.put('/user/favorites/:trail_id', passport.authenticate(['bearer', 'anonymous'], {session: false}),
  function(req, res) {
    var trailID = parseInt(req.params.trail_id);
    var googleID = req.body.googleID;
    User.findOneAndUpdate( { 'favorites.trail_id':trailID, 'googleID':googleID }, 
                  { $pull : { 'favorites':{ 'trail_id':trailID } } },
                  { new: true },
      function(err, users) {
        if(err) {
          return res.send(err)
        }
        return res.json(users);
      });
  });

// GET: API data for trails by city & state
app.get('/trails/:city/:state', function(req, res) {
  var city = req.params.city;
  var state = req.params.state;
  unirest.get('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=mountain+biking&q[city_cont]=' + city + '&q[state_cont]=' + state + '&radius=50')
  .header('X-Mashape-Key', 'Njf9yX0QmImshN5LtDdUS9MQcM68p1BVQxqjsna4e89QJjc3NI')
  .header('Accept', 'text/plain')
  .end(function (result) {
    return res.send(result.body);
  });
});


const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);



function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
