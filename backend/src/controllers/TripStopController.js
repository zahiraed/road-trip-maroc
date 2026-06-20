const tripStopService =
    require("../services/TripStopService");

class TripStopController {

    async getAll(req, res) {
        try {
            const tripStops =
                await tripStopService.getAllTripStops();

            res.status(200).json(tripStops);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const tripStop =
                await tripStopService.getTripStopById(
                    req.params.id
                );

            if (!tripStop) {
                return res.status(404).json({
                    message: "TripStop not found"
                });
            }

            res.status(200).json(tripStop);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const tripStop =
                await tripStopService.createTripStop(
                    req.body
                );

            res.status(201).json(tripStop);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const tripStop =
                await tripStopService.updateTripStop(
                    req.params.id,
                    req.body
                );

            if (!tripStop) {
                return res.status(404).json({
                    message: "TripStop not found"
                });
            }

            res.status(200).json(tripStop);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await tripStopService.deleteTripStop(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "TripStop not found"
                });
            }

            res.status(200).json({
                message: "TripStop deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = new TripStopController();