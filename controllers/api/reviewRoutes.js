// import modules 
const router = require('express').Router();
const { Review, Game, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get route to get all reviews with game 
router.get('/', async (req, res) => {

    try { // try 
        // get all reviews include game 
        const allreviews = await Review.findAll(
            {
                include: [{ model: Game }, { model: User }]
            })

        // no reveiw found 
        if (!allreviews) {
            res.status(400).json({ message: "No reveiws found" });
        }

        // success
        res.status(200).json(allreviews);
    }
    catch (err) { // catch err
        res.status(400).json(err);
    }
});

// get route to get reveiw by id 
router.get('/:id', async (req, res) => {

    try { // try 
        // get review with id include game 
        const reviewById = await Review.findByPk(req.params.id, {
                include: [{ model: Game }, { model: User }]
            });

        // no reveiw found 
        if (!reviewById) {
            res.status(400).json({ message: "No reveiw found with that id" });
        }

        // success
        res.status(200).json(reviewById);
    }
    catch (err) { // catch err
        res.status(500).json(err);
    }
});

// post route to post a new review
router.post('/', withAuth, async (req, res) => {
    try { // try 
        // create new review using body of request 
        const newReview = await Review.create(
            {
                review_content: req.body.review_content,
                user_id: req.body.user_id,
                game_id: req.body.game_id,
            });

        // no reveiw created 
        if (!newReview) {
            res.status(400).json({ message: "Error creating review" });
        }

        // success
        res.status(200).json(newReview);
    } catch (err) { // catch err
        res.status(500).json(err);
    }
});

// put route to update a review
router.post('/:id', withAuth, async (req, res) => {
    try { // try 
        // update review using body of request  
        const updateThisReview = await Review.update(
            {
                review_content: req.body.review_content
            },
            {
                where: {
                    id: req.params.id,
                },
            });

        // no reveiw created 
        if (!updateThisReview) {
            res.status(400).json({ message: "Error updating review" });
        }

        // success
        res.status(200).json(updateThisReview);
    } catch (err) { // catch err
        res.status(500).json(err);
    }
});

// delete route for dleting reveiews by id only if auth
router.delete('/:id', withAuth, async (req, res) => {
    try { // try
        // try to search review by id form req 
        const reviewData = await Review.destroy(
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            });

        // no reveiw found with id
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        // success
        res.status(200).json(reviewData);
    } catch (err) { // catch err
        res.status(500).json(err);
    }
});

// export module
module.exports = router;

