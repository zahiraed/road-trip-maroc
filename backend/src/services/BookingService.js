const bookingRepository =
    require("../repositories/BookingRepository");

class BookingService {

    async getAllBookings() {
        return await bookingRepository.findAll();
    }

    async getBookingById(id) {
        return await bookingRepository.findById(id);
    }

    async createBooking(data) {
        return await bookingRepository.create(data);
    }

    async updateBooking(id, data) {
        return await bookingRepository.update(id, data);
    }

    async deleteBooking(id) {
        return await bookingRepository.delete(id);
    }
    async getBookingsByUserId(userId) {
        return await bookingRepository.findByUserId(userId);
    }
}

module.exports = new BookingService();