const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Agency = sequelize.define(
  "Agency",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT
    },

    email: {
      type: DataTypes.STRING(255)
    },

    phone: {
      type: DataTypes.STRING(50)
    },

    address: {
      type: DataTypes.TEXT
    },

    city: {
      type: DataTypes.STRING(100)
    },

    website: {
      type: DataTypes.STRING(255)
    },

    logo_url: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: "agencies",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
Agency.associate = (models) => {
    Agency.hasMany(models.Trip, {
        foreignKey: "agency_id",
        as: "trips"
    });
};
module.exports = Agency;