const TripStop = require("../models/TripStop");

class TripStopRepository {

    async findAll() {
        return await TripStop.findAll();
    }

    async findById(id) {
        return await TripStop.findByPk(id);
    }

    async create(data) {
        return await TripStop.create(data);
    }

    async update(id, data) {
        const tripStop = await TripStop.findByPk(id);

        if (!tripStop) {
            return null;
        }

        return await tripStop.update(data);
    }

    async delete(id) {
        const tripStop = await TripStop.findByPk(id);

        if (!tripStop) {
            return false;
        }

        await tripStop.destroy();

        return true;
    }
}

module.exports = new TripStopRepository();