const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const TripDay = sequelize.define(
  "TripDay",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    day_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    title: {
      type: DataTypes.STRING(255)
    },

    description: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: "trip_days",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
TripDay.associate = (models) => {
    TripDay.belongsTo(models.Trip, {
        foreignKey: "trip_id",
        as: "trip"
    });
};
module.exports = TripDay;