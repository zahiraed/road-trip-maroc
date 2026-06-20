const Agency = require("../models/Agency");
const Trip = require("../models/Trip");
const Booking = require("../models/Booking");
const User = require("../models/User");
class AgencyRepository {

    async findAll() {
        return await Agency.findAll();
    }

    async findById(id) {
        return await Agency.findByPk(id);
    }

    async create(data) {
        return await Agency.create(data);
    }

    async update(id, data) {
        const agency = await Agency.findByPk(id);

        if (!agency) {
            return null;
        }

        return await agency.update(data);
    }

    async delete(id) {
        const agency = await Agency.findByPk(id);

        if (!agency) {
            return false;
        }

        await agency.destroy();

        return true;
    }
    async getDashboardStats(agencyId) {

        const trips =
            await Trip.findAll({
                where: {
                    agency_id: agencyId
                }
            });
    
        const tripIds =
            trips.map(
                trip => trip.id
            );
    
        const tripsCount =
            tripIds.length;
    
        const bookingsCount =
            await Booking.count({
                where: {
                    trip_id: tripIds
                }
            });
    
        const totalRevenue =
            await Booking.sum(
                "total_price",
                {
                    where: {
                        trip_id: tripIds
                    }
                }
            );
    
        return {
            tripsCount,
            bookingsCount,
            totalRevenue:
                totalRevenue || 0
        };
    }

    async getAgencyBookings(agencyId) {

        const trips =
            await Trip.findAll({
                where: {
                    agency_id: agencyId
                }
            });
    
        const tripIds =
            trips.map(
                trip => trip.id
            );
    
        return await Booking.findAll({
            where: {
                trip_id: tripIds
            }
        });
    }
}

module.exports = new AgencyRepository();