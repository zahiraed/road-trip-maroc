const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Payment = sequelize.define(
  "Payment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },

    payment_method: {
      type: DataTypes.STRING(50)
    },

    payment_status: {
      type: DataTypes.STRING(50),
      defaultValue: "PENDING"
    },

    transaction_reference: {
      type: DataTypes.STRING(255)
    },

    payment_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    tableName: "payments",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

module.exports = Payment;