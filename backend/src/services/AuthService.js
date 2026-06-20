const bcrypt = require("bcryptjs");
const authRepository = require("../repositories/AuthRepository");
const jwt = require("jsonwebtoken");
class AuthService {

    async register(userData) {

        const existingUser =
            await authRepository.findByEmail(userData.email);

        if (existingUser) {
            throw new Error("Email already exists");
        }

        const hashedPassword =
            await bcrypt.hash(userData.password, 10);

        const userToCreate = {
            role_id: 2,
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            password_hash: hashedPassword,
            phone: userData.phone,
            is_active: true
        };

        return await authRepository.create(userToCreate);
    }
    async login(email, password) {

        const user =
            await authRepository.findByEmail(email);
    
        if (!user) {
            throw new Error("Invalid email or password");
        }
    
        const isPasswordValid =
            await bcrypt.compare(
                password,
                user.password_hash
            );
    
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }
    
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role_id: user.role_id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h"
            }
        );
    
        return {
            token,
            user
        };
    }
}

module.exports = new AuthService();