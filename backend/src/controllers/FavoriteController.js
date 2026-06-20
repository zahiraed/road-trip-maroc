const favoriteService =
    require("../services/FavoriteService");

class FavoriteController {

    async getAll(req, res) {

        try {

            const favorites =
                await favoriteService.getAllFavorites();

            res.status(200).json(favorites);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async getById(req, res) {

        try {

            const favorite =
                await favoriteService.getFavoriteById(
                    req.params.id
                );

            if (!favorite) {
                return res.status(404).json({
                    message: "Favorite not found"
                });
            }

            res.status(200).json(favorite);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async create(req, res) {

        try {

            const favorite =
                await favoriteService.createFavorite(
                    req.body
                );

            res.status(201).json(favorite);

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }

    async delete(req, res) {

        try {

            const favorite =
                await favoriteService.deleteFavorite(
                    req.params.id
                );

            if (!favorite) {
                return res.status(404).json({
                    message: "Favorite not found"
                });
            }

            res.status(200).json({
                message: "Favorite deleted successfully"
            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });

        }
    }
}

module.exports = new FavoriteController();