// import modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// game model
class Game extends Model {}

// game constructor
Game.init(
    { // fields name, cover, genres, involved_companies, summary; limit ?; 

        // id 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // title ("name" in api)
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // description ("summary" in api)
        decription:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        // url for photo (make seperate call with game id)
        photo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // sequelize 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

// export game
module.exports = Game;
