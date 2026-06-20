const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Trip = sequelize.define(
    "Trip",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        agency_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT
        },

        duration_days: {
            type: DataTypes.INTEGER
        },

        price: {
            type: DataTypes.DECIMAL(10, 2)
        },

        max_participants: {
            type: DataTypes.INTEGER
        },

        difficulty_level: {
            type: DataTypes.STRING(50)
        },

        image_url: {
            type: DataTypes.TEXT
        },

        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName: "trips",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

module.exports = Trip;