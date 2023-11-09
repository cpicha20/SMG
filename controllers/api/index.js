// import modules
const router = require('express').Router();

// import routes
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const gameRouter = require('./gameRouter');

// use routes
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/games', gameRouter);

// export module
module.exports = router;
