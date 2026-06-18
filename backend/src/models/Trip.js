const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Trip = sequelize.define(
  "Trip",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    agency_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT
    },

    duration_days: {
      type: DataTypes.INTEGER
    },

    price: {
      type: DataTypes.DECIMAL(10,2)
    },

    max_people: {
      type: DataTypes.INTEGER
    },

    image_url: {
      type: DataTypes.TEXT
    },

    is_featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: "trips",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);
Trip.associate = (models) => {
    Trip.belongsTo(models.Agency, {
        foreignKey: "agency_id",
        as: "agency"
    });
};
Trip.associate = (models) => {
    Trip.belongsTo(models.Agency, {
        foreignKey: "agency_id",
        as: "agency"
    });

    Trip.hasMany(models.TripDay, {
        foreignKey: "trip_id",
        as: "days"
    });
};
module.exports = Trip;