// import modules
const gameSeederData = require('./games.js');
//const reviewSeederData = require('./reviews.js');
//const userSeederData = require('./users.js');
const { Game, Review, User } = require('../models');
const sequelize = require('../config/connection.js');

// func to seed db with bulkcreate 
const seedDatabase = async () => {
    // await connection/sync
    await sequelize.sync({ force: true });

    // bulk create games
    const games = await Game.bulkCreate(gameSeederData, {});

    // bulk create users
    //const users = await User.bulkCreate(userSeederData, {});

    // bulk create reviews
    //const reviews = await Review.bulkCreate(reviewSeederData, {});

    // exit process after seeding 
    process.exit(0);
};

// call func to seed db
seedDatabase();

