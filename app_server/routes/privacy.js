var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  res.status(200).send("Class Project. We will not share or post any information from yours.")
});



module.exports = router;
