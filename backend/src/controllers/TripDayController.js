const tripDayService =
    require("../services/TripDayService");

class TripDayController {

    async getAll(req, res) {
        try {
            const tripDays =
                await tripDayService.getAllTripDays();

            res.status(200).json(tripDays);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const tripDay =
                await tripDayService.getTripDayById(
                    req.params.id
                );

            if (!tripDay) {
                return res.status(404).json({
                    message: "TripDay not found"
                });
            }

            res.status(200).json(tripDay);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const tripDay =
                await tripDayService.createTripDay(
                    req.body
                );

            res.status(201).json(tripDay);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const tripDay =
                await tripDayService.updateTripDay(
                    req.params.id,
                    req.body
                );

            if (!tripDay) {
                return res.status(404).json({
                    message: "TripDay not found"
                });
            }

            res.status(200).json(tripDay);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await tripDayService.deleteTripDay(
                    req.params.id
                );

            if (!deleted) {
                return res.status(404).json({
                    message: "TripDay not found"
                });
            }

            res.status(200).json({
                message: "TripDay deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = new TripDayController();