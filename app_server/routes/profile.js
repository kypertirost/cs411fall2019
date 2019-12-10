const express = require('express');
const router = express.Router();

const authCheckCtrl = (req, res, next) => {
  if(req.user) {
    //login
    next();
  } else {
    //access without login
    res.redirect('/auth/google');
  }
}

router.get('/', authCheckCtrl, (req, res) => {
  res.redirect('/resource/calendar/index.html')
});

module.exports = router;
