// import models 
const Game = require('../models/Game.js');
const Review = require('../models/Review.js');
const User = require('../models/User.js');

// each review belongs to one user 
Review.belongsTo(User, {
    foreignKey: 'user_id',
});

// game belongs to user 
Game.belongsTo(User, {
    foreignKey: 'user_id',
    onUpdate: 'CASCADE',
});

// each game has many reviews
Game.hasMany(Review, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE',
});

// export module 
module.exports = { User, Review, Game }; 
