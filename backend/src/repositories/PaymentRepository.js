const Payment = require("../models/Payment");

class PaymentRepository {

    async findAll() {
        return await Payment.findAll();
    }

    async findById(id) {
        return await Payment.findByPk(id);
    }

    async create(data) {
        return await Payment.create(data);
    }

    async update(id, data) {
        const payment = await Payment.findByPk(id);

        if (!payment) {
            return null;
        }

        return await payment.update(data);
    }

    async delete(id) {
        const payment = await Payment.findByPk(id);

        if (!payment) {
            return false;
        }

        await payment.destroy();

        return true;
    }
}

module.exports = new PaymentRepository();