const bookingService =
    require("../services/BookingService");

class BookingController {

    async getAll(req, res) {
        try {
            const bookings =
                await bookingService.getAllBookings();

            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const booking =
                await bookingService.getBookingById(
                    req.params.id
                );

            if (!booking) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }

            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const booking =
                await bookingService.createBooking(
                    req.body
                );

            res.status(201).json(booking);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const booking =
                await bookingService.updateBooking(
                    req.params.id,
                    req.body
                );

            if (!booking) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }

            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await bookingService.deleteBooking(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "Booking not found"
                });
            }

            res.status(200).json({
                message: "Booking deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
    async getByUserId(req, res) {

        try {
    
            const bookings =
                await bookingService.getBookingsByUserId(
                    req.params.userId
                );
    
            res.status(200).json(bookings);
    
        } catch (error) {
    
            res.status(500).json({
                message: error.message
            });
    
        }
    
    }
}

module.exports = new BookingController();