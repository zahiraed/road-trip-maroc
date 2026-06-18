const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    tableName: "roles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
Role.associate = (models) => {
    Role.hasMany(models.User, {
        foreignKey: "role_id",
        as: "users"
    });
};
module.exports = Role;