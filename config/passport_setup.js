const passport = require('passport');
const Google = require('passport-google-oauth20');
const key = require('./key');
passport.use(
  new Google({
    //options for google
    callbackURL:'/auth/google/redirect',
    clientID: key.google.clientID,
    clientSecret:key.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log(profile);
  })
);
