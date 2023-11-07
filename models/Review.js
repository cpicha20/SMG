// import modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// review model
class Review extends Model { }

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
        review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // user who posted review
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            },
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