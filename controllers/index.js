// import module
const router = require('express').Router();

// import routes
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');
const gameRoutes =  require('./gameRoutes');
const userRoutes =  require('./userRoutes');

// use routes 
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/game', gameRoutes);
router.use('/profile', userRoutes);

// export module
module.exports = router;