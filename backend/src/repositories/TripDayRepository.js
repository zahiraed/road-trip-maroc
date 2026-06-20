const TripDay = require("../models/TripDay");

class TripDayRepository {

    async findAll() {
        return await TripDay.findAll();
    }

    async findById(id) {
        return await TripDay.findByPk(id);
    }

    async create(data) {
        return await TripDay.create(data);
    }

    async update(id, data) {
        const tripDay = await TripDay.findByPk(id);

        if (!tripDay) {
            return null;
        }

        return await tripDay.update(data);
    }

    async delete(id) {
        const tripDay = await TripDay.findByPk(id);

        if (!tripDay) {
            return false;
        }

        await tripDay.destroy();

        return true;
    }
}

module.exports = new TripDayRepository();