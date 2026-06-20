const Review = require("../models/Review");

class ReviewRepository {

    async findAll() {
        return await Review.findAll();
    }

    async findById(id) {
        return await Review.findByPk(id);
    }

    async create(data) {
        return await Review.create(data);
    }

    async update(id, data) {
        const review = await Review.findByPk(id);

        if (!review) {
            return null;
        }

        return await review.update(data);
    }

    async delete(id) {
        const review = await Review.findByPk(id);

        if (!review) {
            return false;
        }

        await review.destroy();

        return true;
    }
}

module.exports = new ReviewRepository();