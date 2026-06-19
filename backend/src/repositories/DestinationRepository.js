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
    async update(id, data) {
        const destination =
            await Destination.findByPk(id);

        if (!destination) {
            return null;
        }

        await destination.update(data);

        return destination;
    }

    async delete(id) {
        const destination =
            await Destination.findByPk(id);

        if (!destination) {
            return false;
        }

        await destination.destroy();

        return true;
    }
}

module.exports = new DestinationRepository();