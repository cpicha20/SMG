// import modules 
const router = require('express').Router();
const { Game } = require('../../models');

// post request for adding game to collection 
router.put('/', async (req, res) => {
    //console.log(req.body);

    try {
        const insertThisGame = await Game.update({
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.body.game_id,
            },
        });

        // success
        res.status(200).json(insertThisGame);
    }
    catch (err) { // catch err
        res.status(400).json(err);
    }
});




// export module
module.exports = router;
