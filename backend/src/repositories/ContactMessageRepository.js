const ContactMessage =
    require("../models/ContactMessage");

class ContactMessageRepository {

    async findAll() {
        return await ContactMessage.findAll();
    }

    async findById(id) {
        return await ContactMessage.findByPk(id);
    }

    async create(data) {
        return await ContactMessage.create(data);
    }

    async delete(id) {
        const message =
            await ContactMessage.findByPk(id);

        if (!message) {
            return false;
        }

        await message.destroy();

        return true;
    }
}

module.exports =
    new ContactMessageRepository();