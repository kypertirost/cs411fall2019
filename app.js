var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var passport = require('passport');
var bodyParser = require("body-parser");
var mongoskin = require('mongoskin');

const Event = require('./models/eventSchema');

const key = require('./config/key');
var indexRouter = require('./app_server/routes/index');
var authRouter = require('./app_server/routes/auth');
var searchRouter = require('./app_server/routes/search');
var privacyRouter = require('./app_server/routes/privacy');
var profileRouter = require('./app_server/routes/profile');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/resource', express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [key.session.cookieKey]
}));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(key.mongodb.dbURL, {useNewUrlParser: true});

var db = mongoskin.db(key.mongodb.olddbURL, { w: 0});
    db.bind('event');



mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log("connect to mongodb successfully");
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/search', searchRouter);
app.use('/privacy', privacyRouter);
app.use('/profile', profileRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.send(err);
// });


app.get('/init', function(req, res){
  db.event.insert({
         text:"My test event A",
         start_date: new Date(2018,8,1),
         end_date:   new Date(2018,8,5)
     });
     db.event.insert({
         text:"One more test event",
         start_date: new Date(2018,8,3),
         end_date:   new Date(2018,8,8),
         color: "#DD8616"
     });


app.get('/data', function(req, res){
  if (req.user) {
    db.event.find().toArray(function(err, data){
  		//set id property for all records
  		for (var i = 0; i < data.length; i++)
  			data[i].id = data[i]._id;

  		//output response
  		res.send(data);
  	});
  }

});
app.get('/layout', (req, res) => {
  res.render('layout');
})

app.post('/data', function(req, res){
  var data = req.body;
	var mode = data["!nativeeditor_status"];
	var sid = data.id;
	var tid = sid;

	delete data.id;
	delete data.gr_id;
	delete data["!nativeeditor_status"];


	function update_response(err, result){
		if (err)
			mode = "error";
		else if (mode == "inserted")
			tid = data._id;

		res.setHeader("Content-Type","application/json");
		res.send({action: mode, sid: sid, tid: tid});
	}

	if (mode == "updated")
		db.event.updateById( sid, data, update_response);
	else if (mode == "inserted")
		db.event.insert(data, update_response);
	else if (mode == "deleted")
		db.event.removeById( sid, update_response);
	else
		res.send("Not supported operation");
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
module.exports = app;
