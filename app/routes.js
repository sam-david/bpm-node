module.exports = function(app, passport) {
  app.get('/auth/spotify',
    passport.authenticate('spotify',{scope: ['user-read-email','user-read-private']}),
    function(req, res){
      // The request will be redirected to spotify for authentication, so this
      // function will not be called.
    });

  app.get('/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      console.log("response", res)
      res.redirect('/');
    });
}