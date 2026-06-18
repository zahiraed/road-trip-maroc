const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Booking = sequelize.define(
  "Booking",
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
    },

    booking_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },

    number_of_people: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    total_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },

    status: {
      type: DataTypes.STRING(50),
      defaultValue: "PENDING"
    }
  },
  {
    tableName: "bookings",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

module.exports = Booking;