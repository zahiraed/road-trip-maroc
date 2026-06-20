const contactMessageService =
    require("../services/ContactMessageService");

class ContactMessageController {

    async getAll(req, res) {
        try {

            const messages =
                await contactMessageService.getAllMessages();

            res.status(200).json(messages);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async getById(req, res) {
        try {

            const message =
                await contactMessageService.getMessageById(
                    req.params.id
                );

            if (!message) {
                return res.status(404).json({
                    message: "Message not found"
                });
            }

            res.status(200).json(message);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async create(req, res) {
        try {

            const message =
                await contactMessageService.createMessage(
                    req.body
                );

            res.status(201).json(message);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async delete(req, res) {
        try {

            const deleted =
                await contactMessageService.deleteMessage(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "Message not found"
                });
            }

            res.status(200).json({
                message:
                    "Message deleted successfully"
            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }
}

module.exports =
    new ContactMessageController();