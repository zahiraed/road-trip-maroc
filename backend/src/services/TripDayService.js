const tripDayRepository =
    require("../repositories/TripDayRepository");

class TripDayService {

    async getAllTripDays() {
        return await tripDayRepository.findAll();
    }

    async getTripDayById(id) {
        return await tripDayRepository.findById(id);
    }

    async createTripDay(data) {
        return await tripDayRepository.create(data);
    }

    async updateTripDay(id, data) {
        return await tripDayRepository.update(id, data);
    }

    async deleteTripDay(id) {
        return await tripDayRepository.delete(id);
    }
}

module.exports = new TripDayService();