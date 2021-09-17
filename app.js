var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressHBS = require('express-handlebars');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const mongoose = require('mongoose');
const session = require('express-session');
var indexRouter = require('./routes/index');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
// const bodyPaser = require('body-parser');
// var usersRouter = require('./routes/users');

var app = express();

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });
require('./config/passport');
// This is a test
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHBS({ defaultLayout: 'layout', extname: '.hbs', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({ secret: 'thisisasecret', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
