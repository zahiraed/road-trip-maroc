const agencyService = require("../services/AgencyService");

class AgencyController {

    async getAll(req, res) {
        try {
            const agencies =
                await agencyService.getAllAgencies();

            res.status(200).json(agencies);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async getById(req, res) {
        try {
            const agency =
                await agencyService.getAgencyById(req.params.id);

            if (!agency) {
                return res.status(404).json({
                    message: "Agency not found"
                });
            }

            res.status(200).json(agency);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async create(req, res) {
        try {
            const agency =
                await agencyService.createAgency(req.body);

            res.status(201).json(agency);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const agency =
                await agencyService.updateAgency(
                    req.params.id,
                    req.body
                );

            if (!agency) {
                return res.status(404).json({
                    message: "Agency not found"
                });
            }

            res.status(200).json(agency);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const deleted =
                await agencyService.deleteAgency(req.params.id);

            if (!deleted) {
                return res.status(404).json({
                    message: "Agency not found"
                });
            }

            res.status(200).json({
                message: "Agency deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
    async getDashboardStats(
        req,
        res
    ) {
    
        try {
    
            const stats =
                await agencyService.getDashboardStats(
                    req.params.id
                );
    
            res.status(200)
                .json(stats);
    
        } catch (error) {
    
            res.status(500)
                .json({
                    message:
                        error.message
                });
    
        }
    }
    async getAgencyBookings(
        req,
        res
    ) {
    
        try {
    
            const bookings =
                await agencyService.getAgencyBookings(
                    req.params.id
                );
    
            res.status(200)
                .json(bookings);
    
        } catch (error) {
    
            res.status(500)
                .json({
                    message:
                        error.message
                });
    
        }
    }
}

module.exports = new AgencyController();