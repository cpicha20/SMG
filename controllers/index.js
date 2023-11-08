// import module
const router = require('express').Router();

// import routes
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');

// use routes 
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

// export module
module.exports = router;