const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Favorite = sequelize.define(
    "Favorite",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        trip_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "favorites",
        timestamps: false
    }
);

module.exports = Favorite;