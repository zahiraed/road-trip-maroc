const agencyRepository = require("../repositories/AgencyRepository");

class AgencyService {

    async getAllAgencies() {
        return await agencyRepository.findAll();
    }

    async getAgencyById(id) {
        return await agencyRepository.findById(id);
    }

    async createAgency(data) {
        return await agencyRepository.create(data);
    }

    async updateAgency(id, data) {
        return await agencyRepository.update(id, data);
    }

    async deleteAgency(id) {
        return await agencyRepository.delete(id);
    }
    async getDashboardStats(agencyId) {

        return await
            agencyRepository.getDashboardStats(
                agencyId
            );
    
    }
    async getAgencyBookings(
        agencyId
    ) {
    
        return await
            agencyRepository.getAgencyBookings(
                agencyId
            );
    
    }
}

module.exports = new AgencyService();