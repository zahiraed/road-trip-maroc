const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const ContactMessage = sequelize.define(
    "ContactMessage",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        full_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        subject: {
            type: DataTypes.STRING(255)
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        tableName: "contact_messages",
        timestamps: false
    }
);

module.exports = ContactMessage;