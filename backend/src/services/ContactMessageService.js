const contactMessageRepository =
    require("../repositories/ContactMessageRepository");

class ContactMessageService {

    async getAllMessages() {
        return await contactMessageRepository.findAll();
    }

    async getMessageById(id) {
        return await contactMessageRepository.findById(id);
    }

    async createMessage(data) {
        return await contactMessageRepository.create(data);
    }

    async deleteMessage(id) {
        return await contactMessageRepository.delete(id);
    }
}

module.exports =
    new ContactMessageService();