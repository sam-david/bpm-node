var SpotifyStrategy = require('passport-spotify').Strategy;
var configAuth = require('./auth');

module.exports = function(passport) {
		passport.use(new SpotifyStrategy({
	    clientID: configAuth.spotifyAuth.clientID,
	    clientSecret: configAuth.spotifyAuth.clientID,
	    callbackURL: configAuth.spotifyAuth.clientID
	  },
	  function(accessToken, refreshToken, profile, done) {
	    console.log(accessToken, refreshToken, "profile",profile, done)
	    User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
	      return done(err, user);
	    });
	  }
	));
}