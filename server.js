var express = require('express');
var passport = require('passport')
var app = express();
// var cookieParser = require('cookie-parser');

require('./config/passport')(passport); // passport config in separate file, spotify stategy included

app.use(passport.initialize());
app.use(passport.session());
// app.use(cookieParser()); // read cookies for auth

// routes
require('./app/routes')(app, passport);
app.get('/',function (req, res) {
	res.send('Hello World')
})

app.listen(3000)