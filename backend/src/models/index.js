const sequelize = require("../config/sequelize");
const Booking = require("./Booking");
const Payment = require("./Payment");

Booking.hasMany(Payment, {
    foreignKey: "booking_id",
    as: "payments"
});

Payment.belongsTo(Booking, {
    foreignKey: "booking_id",
    as: "booking"
});

module.exports = {
    sequelize,
    Booking,
    Payment
};