const sequelize = require("../config/sequelize");

const Role = require("./Role");
const User = require("./User");
const Destination = require("./Destination");
const Agency = require("./Agency");
const Trip = require("./Trip");
const TripDay = require("./TripDay");
const TripStop = require("./TripStop");
const Booking = require("./Booking");
const Payment = require("./Payment");


// =====================
// Role ↔ User
// =====================

Role.hasMany(User, {
    foreignKey: "role_id",
    as: "users"
});

User.belongsTo(Role, {
    foreignKey: "role_id",
    as: "role"
});


// =====================
// Agency ↔ Trip
// =====================

Agency.hasMany(Trip, {
    foreignKey: "agency_id",
    as: "trips"
});

Trip.belongsTo(Agency, {
    foreignKey: "agency_id",
    as: "agency"
});


// =====================
// Destination ↔ Trip
// =====================

Destination.hasMany(Trip, {
    foreignKey: "destination_id",
    as: "trips"
});

Trip.belongsTo(Destination, {
    foreignKey: "destination_id",
    as: "destination"
});


// =====================
// Trip ↔ TripDay
// =====================

Trip.hasMany(TripDay, {
    foreignKey: "trip_id",
    as: "days"
});

TripDay.belongsTo(Trip, {
    foreignKey: "trip_id",
    as: "trip"
});


// =====================
// TripDay ↔ TripStop
// =====================

TripDay.hasMany(TripStop, {
    foreignKey: "trip_day_id",
    as: "stops"
});

TripStop.belongsTo(TripDay, {
    foreignKey: "trip_day_id",
    as: "day"
});


// =====================
// User ↔ Booking
// =====================

User.hasMany(Booking, {
    foreignKey: "user_id",
    as: "bookings"
});

Booking.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});


// =====================
// Trip ↔ Booking
// =====================

Trip.hasMany(Booking, {
    foreignKey: "trip_id",
    as: "bookings"
});

Booking.belongsTo(Trip, {
    foreignKey: "trip_id",
    as: "trip"
});


// =====================
// Booking ↔ Payment
// =====================

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
    Role,
    User,
    Destination,
    Agency,
    Trip,
    TripDay,
    TripStop,
    Booking,
    Payment
};