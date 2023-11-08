// import modules 
const router = require('express').Router();
const { Game, Review } = require('../models');

// get route to show game data 
router.get('/:id', async (req, res) => {

    try { // try 
        // get reviews with game id 
        const reviewsForGame = await Review.findAll(
            {
                where: {
                    game_id: req.params.id,
                }
            });

        // get game data 
        const gameData = await Game.findByPk(req.params.id,
            {
                where: {
                    id: req.params.id
                }
            });

        // no reveiws found 
        if (!reviewsForGame) {
            res.status(400).json({ message: "No reviews found for this game" });
        }

        // no game found 
        if (!gameData) {
            res.status(400).json({ message: "No game found with this id" });
        }

        // serialize reviews so the template can read it
        const reviews = reviewsForGame.map((review) => review.get({ plain: true }));

        // pass serialized reviews, game data and session flag into template
        res.render('game', {
            reviews,
            gameData,
            logged_in: req.session.logged_in,
        });
    }
    catch (err) { // catch err
        res.status(500).json(err);
    }
});

// export module 
module.exports = router;

