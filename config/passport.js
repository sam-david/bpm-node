var SpotifyStrategy = require('passport-spotify').Strategy;
var configAuth = require('./auth');

module.exports = function(passport) {
		passport.use(new SpotifyStrategy({
	    clientID: configAuth.client_id,
	    clientSecret: client_secret//fix,
	    callbackURL: "http://localhost:8888/auth/spotify/callback"
	  },
	  function(accessToken, refreshToken, profile, done) {
	    console.log(accessToken, refreshToken, "profile",profile, done)
	    // User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
	    //   return done(err, user);
	    // });
	  }
	));
}