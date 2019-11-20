const express = require('express');
const passport = require('passport');
const passportSetup = require('../../config/passport_setup');
const router = express.Router();

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

const redirectCtrl = (req, res) => {
  res.status(200).send("OK");
};
router.get('/google/redirect', passport.authenticate('google'), redirectCtrl);
module.exports = router
