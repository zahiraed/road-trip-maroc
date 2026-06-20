const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Newsletter = sequelize.define(
    "Newsletter",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },

        subscribed_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: "newsletter",
        timestamps: false
    }
);

module.exports = Newsletter;