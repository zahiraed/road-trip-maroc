const Trip = require("../models/Trip");

class TripRepository {

    async findAll() {
        return await Trip.findAll();
    }

    async findById(id) {
        return await Trip.findByPk(id);
    }

    async create(data) {
        return await Trip.create(data);
    }

    async update(id, data) {
        const trip = await Trip.findByPk(id);

        if (!trip) {
            return null;
        }

        return await trip.update(data);
    }

    async delete(id) {
        const trip = await Trip.findByPk(id);

        if (!trip) {
            return null;
        }

        await trip.destroy();

        return true;
    }
}

module.exports = new TripRepository();