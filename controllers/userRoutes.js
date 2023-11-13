// import modules 
const router = require('express').Router();
const { GEOMETRY } = require('sequelize');
const { User, Review, Game } = require('../models');
const withAuth = require('../utils/auth');

// get route to show profile 
router.get('/', withAuth, async (req, res) => {

    try { // try 
        // users reviews
        // get reviews with user id 
        const reviewsForUser = await Review.findAll(
            {
                where: {
                    user_id: req.session.user_id,
                }
            });

            console.log(reviewsForUser);

        // no reveiws found 
        if (!reviewsForUser) {
            console.log("No reviews found for this user");
        }

        // serialize reviews so the template can read it
        const reviews = reviewsForUser.map((review) => review.get({ plain: true }));

        // users collection
        // get game data 
        const collectionData = await Game.findAll(
            {
                where: {
                    user_id: req.session.user_id,
                }
            },
        );

        // no games found 
        if (!collectionData) {
            console.log("No collection found for this user");
        }

        // serialize collection so the template can read it
        const games = collectionData.map((game) => game.get({ plain: true }));

        // user profile
        const userData = await User.findByPk(req.session.user_id);

        const user = userData.get({ plain: true });

        // pass serialized reviews, game data and session flag into template
        res.render('profile', {
            reviews,
            games,
            user,
            logged_in: req.session.logged_in,
        });
    }
    catch (err) { // catch err
        res.status(500).json(err);
    }
});

// export module 
module.exports = router;