const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },

    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    phone: {
      type: DataTypes.STRING(30)
    },

    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
User.associate = (models) => {
    User.belongsTo(models.Role, {
        foreignKey: "role_id",
        as: "role"
    });
};
module.exports = User;