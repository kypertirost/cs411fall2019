const express = require('express');
const passport = require('passport');
const passportSetup = require('../../config/passport_setup');
const router = express.Router();

const checkCtrl = (req, res, next) => {
  if(req.user) {
    res.redirect('/profile');
  } else {
    next();
  }
}
router.get('/google', checkCtrl, passport.authenticate('google', {
  scope: ['profile']
}));

const redirectCtrl = (req, res) => {
  console.log(req.user);
  res.redirect('/profile');
};

const logoutCtrl = (req, res) => {
  req.logout();
  res.redirect('/');
}

router.get('/google/redirect', passport.authenticate('google'), redirectCtrl);
router.get('/logout', logoutCtrl);
module.exports = router
