const favoriteRepository =
    require("../repositories/FavoriteRepository");

class FavoriteService {

    async getAllFavorites() {
        return await favoriteRepository.findAll();
    }

    async getFavoriteById(id) {
        return await favoriteRepository.findById(id);
    }

    async createFavorite(data) {
        return await favoriteRepository.create(data);
    }

    async deleteFavorite(id) {
        return await favoriteRepository.delete(id);
    }
}

module.exports = new FavoriteService();