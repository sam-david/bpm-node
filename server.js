var express = require('express');
var passport = require('passport')
var app = express();
var path = require('path');
var port = 3030;
// var cookieParser = require('cookie-parser');

// passport config in separate file, spotify stategy included
require('./config/passport')(passport); 
app.use(passport.initialize());
app.use(passport.session());

// set up ejs for view templating
app.set('view engine','ejs'); 
app.set('views', path.join(__dirname, 'views'));

// app.use(cookieParser()); // read cookies for auth

// routes
require('./app/routes')(app, passport);

app.listen(port);
console.log('BPM App started on port: ' + port);