const Agency = require("../models/Agency");

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
}

module.exports = new AgencyRepository();