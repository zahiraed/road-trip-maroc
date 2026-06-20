const userService =
    require("../services/UserService");

class UserController {

    async getAll(req, res) {

        try {

            const users =
                await userService.getAll();

            return res.status(200).json(users);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });

        }
    }

    async getById(req, res) {

        try {

            const user =
                await userService.getById(
                    req.params.id
                );

            if (!user) {

                return res.status(404).json({
                    message: "User not found"
                });

            }

            return res.status(200).json(user);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });

        }
    }

    async update(req, res) {

        try {

            const user =
                await userService.update(
                    req.params.id,
                    req.body
                );

            if (!user) {

                return res.status(404).json({
                    message: "User not found"
                });

            }

            return res.status(200).json(user);

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });

        }
    }

    async delete(req, res) {

        try {

            const deleted =
                await userService.delete(
                    req.params.id
                );

            if (!deleted) {

                return res.status(404).json({
                    message: "User not found"
                });

            }

            return res.status(200).json({
                message: "User deleted successfully"
            });

        } catch (error) {

            return res.status(500).json({
                message: error.message
            });

        }
    }
    async getDashboardStats(req, res) {

        try {
    
            const stats =
                await userService.getDashboardStats(
                    req.params.id
                );
    
            return res.status(200).json(stats);
    
        } catch (error) {
    
            return res.status(500).json({
                message: error.message
            });
    
        }
    }
}

module.exports = new UserController();