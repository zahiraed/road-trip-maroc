const newsletterRepository =
    require("../repositories/NewsletterRepository");

class NewsletterService {

    async getAllSubscribers() {
        return await newsletterRepository.findAll();
    }

    async getSubscriberById(id) {
        return await newsletterRepository.findById(id);
    }

    async createSubscriber(data) {
        return await newsletterRepository.create(data);
    }

    async deleteSubscriber(id) {
        return await newsletterRepository.delete(id);
    }
}

module.exports = new NewsletterService();