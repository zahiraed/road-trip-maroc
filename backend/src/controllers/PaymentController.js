const paymentService =
    require("../services/PaymentService");

class PaymentController {

    async getAll(req, res) {
        try {
            const payments =
                await paymentService.getAllPayments();

            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const payment =
                await paymentService.getPaymentById(
                    req.params.id
                );

            if (!payment) {
                return res.status(404).json({
                    message: "Payment not found"
                });
            }

            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const payment =
                await paymentService.createPayment(
                    req.body
                );

            res.status(201).json(payment);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const payment =
                await paymentService.updatePayment(
                    req.params.id,
                    req.body
                );

            if (!payment) {
                return res.status(404).json({
                    message: "Payment not found"
                });
            }

            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await paymentService.deletePayment(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "Payment not found"
                });
            }

            res.status(200).json({
                message: "Payment deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = new PaymentController();