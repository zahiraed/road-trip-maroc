const User = require("../models/User");

class AuthRepository {

    async findByEmail(email) {
        return await User.findOne({
            where: {
                email
            }
        });
    }

    async create(userData) {
        return await User.create(userData);
    }
}

module.exports = new AuthRepository();