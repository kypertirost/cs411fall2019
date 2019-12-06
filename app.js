var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var passport = require('passport');


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
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [key.session.cookieKey]
}));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(key.mongodb.dbURL, () => {
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect to mongodb successfully");
});
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/search', searchRouter);
app.use('/privacy', privacyRouter);
app.use('/profile', profileRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

app.get('/script', (req,res) =>{
  res.sendFile("./app_server/controllers/main.js")
})



module.exports = app;
