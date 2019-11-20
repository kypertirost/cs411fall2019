var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const key = require('./config/key');
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var authRouter = require('./app_server/routes/auth');
var searchRouter = require('./app_server/routes/search');
var privacyRouter = require('./app_server/routes/privacy');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(key.mongodb.dbURL, () => {
  
})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/search', searchRouter);
app.use('/privacy', privacyRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/script', (req,res) =>{
  res.sendFile("./app_server/controllers/main.js")
})



module.exports = app;
