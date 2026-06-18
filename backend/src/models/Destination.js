const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize")

const Destination = sequelize.define(
  "Destination",
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

    city: {
      type: DataTypes.STRING(100)
    },

    region: {
      type: DataTypes.STRING(100)
    },

    description: {
      type: DataTypes.TEXT
    },

    image_url: {
      type: DataTypes.TEXT
    },

    latitude: {
      type: DataTypes.DECIMAL(10,7)
    },

    longitude: {
      type: DataTypes.DECIMAL(10,7)
    }
  },
  {
    tableName: "destinations",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

module.exports = Destination;