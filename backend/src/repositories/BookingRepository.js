const Booking = require("../models/Booking");

class BookingRepository {

    async findAll() {
        return await Booking.findAll();
    }

    async findById(id) {
        return await Booking.findByPk(id);
    }

    async create(data) {
        return await Booking.create(data);
    }

    async update(id, data) {
        const booking = await Booking.findByPk(id);

        if (!booking) {
            return null;
        }

        return await booking.update(data);
    }

    async delete(id) {
        const booking = await Booking.findByPk(id);

        if (!booking) {
            return false;
        }

        await booking.destroy();

        return true;
    }
    async findByUserId(userId) {
        return await Booking.findAll({
            where: {
                user_id: userId
            }
        });
    }
}

module.exports = new BookingRepository();