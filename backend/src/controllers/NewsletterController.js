const newsletterService =
    require("../services/NewsletterService");

class NewsletterController {

    async getAll(req, res) {
        try {

            const subscribers =
                await newsletterService.getAllSubscribers();

            res.status(200).json(subscribers);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async getById(req, res) {
        try {

            const subscriber =
                await newsletterService.getSubscriberById(
                    req.params.id
                );

            if (!subscriber) {
                return res.status(404).json({
                    message: "Subscriber not found"
                });
            }

            res.status(200).json(subscriber);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async create(req, res) {
        try {

            const subscriber =
                await newsletterService.createSubscriber(
                    req.body
                );

            res.status(201).json(subscriber);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async delete(req, res) {
        try {

            const deleted =
                await newsletterService.deleteSubscriber(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "Subscriber not found"
                });
            }

            res.status(200).json({
                message: "Subscriber deleted successfully"
            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }
}

module.exports = new NewsletterController();