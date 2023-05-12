const Auth = (req, res, next) => {
    if (req.session.loggedIn) {
        console.log("Logged in successful")
        next();
    } else {
        res.redirect('/login');
    }
  };
  
  module.exports = Auth;