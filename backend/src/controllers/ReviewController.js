const reviewService =
    require("../services/ReviewService");

class ReviewController {

    async getAll(req, res) {
        try {
            const reviews =
                await reviewService.getAllReviews();

            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const review =
                await reviewService.getReviewById(
                    req.params.id
                );

            if (!review) {
                return res.status(404).json({
                    message: "Review not found"
                });
            }

            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const review =
                await reviewService.createReview(
                    req.body
                );

            res.status(201).json(review);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const review =
                await reviewService.updateReview(
                    req.params.id,
                    req.body
                );

            if (!review) {
                return res.status(404).json({
                    message: "Review not found"
                });
            }

            res.status(200).json(review);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await reviewService.deleteReview(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "Review not found"
                });
            }

            res.status(200).json({
                message: "Review deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = new ReviewController();