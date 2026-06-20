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

const Favorite = require("./Favorite");
const Review = require("./Review");
const Newsletter =
    require("./Newsletter");
    const ContactMessage =
    require("./ContactMessage");  
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

User.hasMany(Favorite, {
    foreignKey: "user_id",
    as: "favorites"
});

Favorite.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

Trip.hasMany(Favorite, {
    foreignKey: "trip_id",
    as: "favorites"
});

Favorite.belongsTo(Trip, {
    foreignKey: "trip_id",
    as: "trip"
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

//


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
Destination.hasMany(TripStop, {
    foreignKey: "destination_id",
    as: "tripStops"
});

TripStop.belongsTo(Destination, {
    foreignKey: "destination_id",
    as: "destination"
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
// =====================
// User ↔ Review
// =====================

User.hasMany(Review, {
    foreignKey: "user_id",
    as: "reviews"
});

Review.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// =====================
// Trip ↔ Review
// =====================

Trip.hasMany(Review, {
    foreignKey: "trip_id",
    as: "reviews"
});

Review.belongsTo(Trip, {
    foreignKey: "trip_id",
    as: "trip"
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
    Payment,
    Favorite,
    Review,
    Newsletter,
    ContactMessage
};