// import modules
const router = require('express').Router();

// import routes
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');

// use routes
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);

// export module
module.exports = router;
