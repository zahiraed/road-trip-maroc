const authService = require("../services/AuthService");

class AuthController {

    async register(req, res) {

        try {

            const user =
                await authService.register(req.body);

            res.status(201).json({
                message: "User registered successfully",
                user
            });

        } catch (error) {

            res.status(400).json({
                message: error.message
            });

        }
    }
    async login(req, res) {

        try {
    
            const result =
                await authService.login(
                    req.body.email,
                    req.body.password
                );
    
            res.status(200).json({
                message: "Login successful",
                token: result.token,
                user: result.user
            });
    
        } catch (error) {
    
            res.status(400).json({
                message: error.message
            });
    
        }
    }
}

module.exports = new AuthController();