const passport = require('passport');
const Google = require('passport-google-oauth20');
const key = require('./key');
const User = require('../models/user_schema')

passport.serializeUser((user, done)=> {
  done(null , user.id);
});

passport.deserializeUser((id, done)=> {
  User.findById(id).then((user) => {
    console.log(user);
    done(null, user);
  });
});

passport.use(
  new Google({
    //options for google
    callbackURL:'/auth/google/redirect',
    clientID: key.google.clientID,
    clientSecret:key.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    // console.log(profile);
    User.findOne({googleid:profile.id}).then((currentUser) => {
      if(currentUser) {
        //find the user in database
        done(null, currentUser)
      } else {
        // create user
        new User({
          username: profile.displayName,
          googleid: profile.id
        }).save().then((newUser) => {
          console.log("new user created: " + newUser);
          done(null, newUser);
        })
      }
    })

  })
);
