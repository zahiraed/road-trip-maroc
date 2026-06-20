const userRepository =
    require("../repositories/UserRepository");

class UserService {

    async getAll() {
        return await userRepository.getAll();
    }

    async getById(id) {
        return await userRepository.getById(id);
    }

    async update(id, data) {
        return await userRepository.update(
            id,
            data
        );
    }

    async delete(id) {
        return await userRepository.delete(id);
    }
    async getDashboardStats(userId) {
        return await userRepository.getDashboardStats(
            userId
        );
    }
}

module.exports = new UserService();