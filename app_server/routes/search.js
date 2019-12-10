var express = require('express');
var router = express.Router();
var request = require('request');
var key = require('../../config/key.js');

var apiKey = key.openWeather.apiKey;

const searchCtrl = (req, res) => {
  if (!req.user){
    res.status(403).send("Status 403. Forbidden.\nPlease sign in before using this application.");
  } else {
    var that = res;
    console.log("HI");
    var query = req.query;
    var city = query.city_input;
    console.log(city);
    request.get({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey,
      json: true,
      headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
      // use "that" to send status or result to client
     if (err) {
       console.log('Error:', err);
       that.send(err);
     } else if (res.statusCode !== 200) {
       console.log('Status:', res.statusCode);
       that.status(res.statusCode).send("Unable to locate the city");
     } else {
       console.log(data);
       var weather_description = data.weather[0].main;
       var temp = data.main.temp;
       var fahrenheit_temp = Math.round( (temp*(9/5) - 459.67) * 10 ) / 10;
       var result = "Weather in " + city + " is " + weather_description + " and the temperture is " + fahrenheit_temp + " F";
       that.status(200).send(result);
     }
    });
  }

};

router.get('/', searchCtrl);


module.exports = router;
