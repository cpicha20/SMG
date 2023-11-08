// import modules 
const router = require('express').Router();
const { Game } = require('../models');

// get request for homepage
router.get('/', async (req, res) => {
    try {
        // get all games 
        const allGames = await Game.findAll({});

        // serialize games so the template can read it
        const games = allGames.map((game) => game.get({ plain: true }));

        // pass serialized games and session flag into template
        res.render('homepage', {
            games,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get request to login 
router.get('/login', (req, res) => {
    // user already logged in redirect to homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // otherwise render login page 
    res.render('login');
});

// get request to login 
router.get('/signup', (req, res) => {
    // user already logged in redirect to homepage
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    // otherwise render signup page 
    res.render('signup');
});

// export module 
module.exports = router;