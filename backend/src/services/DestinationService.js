const destinationRepository = require("../repositories/DestinationRepository");

class DestinationService {

    async getAllDestinations() {
        return await destinationRepository.findAll();
    }

    async getDestinationById(id) {
        return await destinationRepository.findById(id);
    }

    async createDestination(data) {
        return await destinationRepository.create(data);
    }

    async updateDestination(id, data) {
        return await destinationRepository.update(id, data);
    }

    async deleteDestination(id) {
        return await destinationRepository.delete(id);
    }
}

module.exports = new DestinationService();