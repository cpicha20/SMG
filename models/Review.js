// import modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// review model
class Review extends Model {}

// review constructor
Review.init(
    {
        // id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // review content
        review_content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        // sequelize 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

// export module
module.exports = Review;