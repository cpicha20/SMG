// import models 
const Game = require('../models/Game.js');
const Review = require('../models/Review.js');
const User = require('../models/User.js');
const Collection = require('../models/Collection.js');

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

// each user has one collection
User.hasOne(Collection, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// each collection belongs to a user
Collection.belongsTo(User, {
    foreignKey: 'user_id'
});

// each collection has many games
Collection.hasMany(Game, {
    foreignKey: 'game_id'
});

// each games has many collections
Game.hasMany(Collection, {
    foreignKey: 'game_id'
});

// export module 
module.exports = { User, Review, Game, Collection }; 
