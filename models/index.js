// import models 
const Game = require('../models/Game.js');
const Review = require('../models/Review.js');
const User = require('../models/User.js');

// each user has many reviews 
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// each review belongs to one user 
Review.belongsTo(User, {
    foreignKey: 'user_id'
});

// each game has many reviews
Game.hasMany(Review, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

// each review belongs to one game 
Review.belongsTo(Game, {
    foreignKey: 'game_id'
});

// export module 
module.exports = { User, Review, Game}; 
