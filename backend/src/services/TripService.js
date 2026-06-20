const tripRepository = require("../repositories/TripRepository");

class TripService {

    async getAllTrips() {
        return await tripRepository.findAll();
    }

    async getTripById(id) {
        return await tripRepository.findById(id);
    }

    async createTrip(data) {
        return await tripRepository.create(data);
    }

    async updateTrip(id, data) {
        return await tripRepository.update(id, data);
    }

    async deleteTrip(id) {
        return await tripRepository.delete(id);
    }
}

module.exports = new TripService();