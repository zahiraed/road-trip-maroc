const User = require("../models/User");
const Booking = require("../models/Booking");
const Favorite = require("../models/Favorite");
const Review = require("../models/Review");
const { Sequelize } = require("sequelize");
class UserRepository {

    async getAll() {
        return await User.findAll();
    }

    async getById(id) {
        return await User.findByPk(id);
    }

    async update(id, data) {

        const user =
            await User.findByPk(id);

        if (!user) {
            return null;
        }

        await user.update(data);

        return user;
    }

    async delete(id) {

        const user =
            await User.findByPk(id);

        if (!user) {
            return null;
        }

        await user.destroy();

        return true;
    }
    async getDashboardStats(userId) {

        const bookingsCount =
            await Booking.count({
                where: {
                    user_id: userId
                }
            });
    
        const favoritesCount =
            await Favorite.count({
                where: {
                    user_id: userId
                }
            });
    
        const reviewsCount =
            await Review.count({
                where: {
                    user_id: userId
                }
            });
    
        const totalSpent =
            await Booking.sum(
                "total_price",
                {
                    where: {
                        user_id: userId
                    }
                }
            );
    
        return {
            bookingsCount,
            favoritesCount,
            reviewsCount,
            totalSpent: totalSpent || 0
        };
    }
}

module.exports = new UserRepository();