const reviewRepository =
    require("../repositories/ReviewRepository");

class ReviewService {

    async getAllReviews() {
        return await reviewRepository.findAll();
    }

    async getReviewById(id) {
        return await reviewRepository.findById(id);
    }

    async createReview(data) {
        return await reviewRepository.create(data);
    }

    async updateReview(id, data) {
        return await reviewRepository.update(id, data);
    }

    async deleteReview(id) {
        return await reviewRepository.delete(id);
    }
}

module.exports = new ReviewService();