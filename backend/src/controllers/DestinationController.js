const destinationService = require("../services/DestinationService");

class DestinationController {

    async getAll(req, res) {
        try {
            const destinations =
                await destinationService.getAllDestinations();

            res.status(200).json(destinations);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const destination =
                await destinationService.getDestinationById(req.params.id);

            if (!destination) {
                return res.status(404).json({
                    message: "Destination not found"
                });
            }

            res.status(200).json(destination);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const destination =
                await destinationService.createDestination(req.body);

            res.status(201).json(destination);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
    async update(req, res) {
        try {
            const destination =
                await destinationService.updateDestination(
                    req.params.id,
                    req.body
                );
    
            if (!destination) {
                return res.status(404).json({
                    message: "Destination not found"
                });
            }
    
            res.status(200).json(destination);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
    
    async delete(req, res) {
        try {
            const deleted =
                await destinationService.deleteDestination(req.params.id);
    
            if (!deleted) {
                return res.status(404).json({
                    message: "Destination not found"
                });
            }
    
            res.status(200).json({
                message: "Destination deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = new DestinationController();