
module.exports = function(app, passport) {
  app.get('/', function(req, res) {
    res.render('index.ejs')
  })
  app.get('/profile',function(req,res) {
    res.render('profile.ejs');
  })
  app.get('/auth/spotify',
    passport.authenticate('spotify',{scope: ['user-read-email','user-read-private'], showDialog: true}),
    function(req, res){
      // The request will be redirected to spotify for authentication, so this
      // function will not be called.
    });

  app.get('/auth/spotify/callback',
    passport.authenticate('spotify', { successRedirect: '/profile',failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      console.log("response", res)
      res.redirect('/');
    });

  app.get('/callback',
  passport.authenticate('spotify', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/profile');
  });
}