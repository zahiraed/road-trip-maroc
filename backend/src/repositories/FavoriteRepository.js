const Favorite = require("../models/Favorite");

class FavoriteRepository {

    async findAll() {
        return await Favorite.findAll();
    }

    async findById(id) {
        return await Favorite.findByPk(id);
    }

    async create(data) {
        return await Favorite.create(data);
    }

    async delete(id) {

        const favorite =
            await Favorite.findByPk(id);

        if (!favorite) {
            return null;
        }

        await favorite.destroy();

        return favorite;
    }
}

module.exports = new FavoriteRepository();