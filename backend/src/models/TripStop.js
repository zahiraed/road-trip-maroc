const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const TripStop = sequelize.define(
  "TripStop",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    trip_day_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    destination_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    stop_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    notes: {
      type: DataTypes.TEXT
    }
  },
  {
    tableName: "trip_stops",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
TripStop.associate = (models) => {
    TripStop.belongsTo(models.TripDay, {
        foreignKey: "trip_day_id",
        as: "day"
    });

    TripStop.belongsTo(models.Destination, {
        foreignKey: "destination_id",
        as: "destination"
    });
};
module.exports = TripStop;