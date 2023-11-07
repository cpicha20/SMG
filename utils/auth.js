// auth func 
const withAuth = (req, res, next) => {
    // user isn't logged in redirect to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else { // go next func
      next();
    }
  };
  
  // expport module
  module.exports = withAuth;
  