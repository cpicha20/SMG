// import modules
const gameSeederData = require('./games.js');
const { Game } = require('../models');
const sequelize = require('../config/connection.js');

// func to seed db with bulkcreate 
const seedDatabase = async () => {
    // await connection/sync
    await sequelize.sync({ force: true });

    // bulk create games
    const games = await Game.bulkCreate(gameSeederData, {});

    // exit process after seeding 
    process.exit(0);
};

// call func to seed db
seedDatabase();

