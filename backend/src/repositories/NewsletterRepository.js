const Newsletter = require("../models/Newsletter");

class NewsletterRepository {

    async findAll() {
        return await Newsletter.findAll();
    }

    async findById(id) {
        return await Newsletter.findByPk(id);
    }

    async create(data) {
        return await Newsletter.create(data);
    }

    async delete(id) {
        const newsletter = await Newsletter.findByPk(id);

        if (!newsletter) {
            return false;
        }

        await newsletter.destroy();

        return true;
    }
}

module.exports = new NewsletterRepository();