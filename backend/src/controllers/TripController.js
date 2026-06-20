const tripService = require("../services/TripService");

class TripController {

    async getAll(req, res) {
        try {
            const trips = await tripService.getAllTrips();

            res.status(200).json(trips);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const trip =
                await tripService.getTripById(req.params.id);

            if (!trip) {
                return res.status(404).json({
                    message: "Trip not found"
                });
            }

            res.status(200).json(trip);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const trip =
                await tripService.createTrip(req.body);

            res.status(201).json(trip);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const trip =
                await tripService.updateTrip(
                    req.params.id,
                    req.body
                );

            if (!trip) {
                return res.status(404).json({
                    message: "Trip not found"
                });
            }

            res.status(200).json(trip);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await tripService.deleteTrip(req.params.id);

            if (!deleted) {
                return res.status(404).json({
                    message: "Trip not found"
                });
            }

            res.status(200).json({
                message: "Trip deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = new TripController();