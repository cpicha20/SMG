// import modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// review model
class Collection extends Model { }

// review constructor
Collection.init(
    {
        // id
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // user whos collection tied to 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            },
        },
        // game tied to users collection 
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "game",
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
module.exports = Collection;