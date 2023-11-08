// import modules 
const router = require('express').Router();
const { User } = require('../../models');

// post request for signing up 
router.post('/', async (req, res) => {
  try {
    // crate new user 
    const userData = await User.create(req.body);

    // save session and send flag as true 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      // success
      res.status(200).json(userData);
    });
  } catch (err) { // catch err
    res.status(400).json(err);
  }
});

// post request to login to 
router.post('/login', async (req, res) => {
  try {
    // look for user by username
    const userData = await User.findOne({ where: { username: req.body.username } });

    // if not user found
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // vlaidate password
    const validPassword = await userData.checkPassword(req.body.password);

    // if password isnt valid 
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // success  save session with logged in flag and user id 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// post route to logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// export module
module.exports = router;
