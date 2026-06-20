const paymentRepository =
    require("../repositories/PaymentRepository");

class PaymentService {

    async getAllPayments() {
        return await paymentRepository.findAll();
    }

    async getPaymentById(id) {
        return await paymentRepository.findById(id);
    }

    async createPayment(data) {
        return await paymentRepository.create(data);
    }

    async updatePayment(id, data) {
        return await paymentRepository.update(id, data);
    }

    async deletePayment(id) {
        return await paymentRepository.delete(id);
    }
}

module.exports = new PaymentService();