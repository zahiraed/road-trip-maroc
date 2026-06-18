const Destination = require("../models/Destination");

class DestinationRepository {

    async findAll() {
        return await Destination.findAll();
    }

    async findById(id) {
        return await Destination.findByPk(id);
    }

    async create(data) {
        return await Destination.create(data);
    }
}

module.exports = new DestinationRepository();