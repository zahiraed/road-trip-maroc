const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./src/config/database");
const sequelize = require("./src/models");
const Role = require("./src/models/Role");
const User = require("./src/models/User");
const Destination = require("./src/models/Destination");
const Agency = require("./src/models/Agency");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Road Trip Maroc API is running"
    });
});

const PORT = process.env.PORT || 5000;
pool.connect()
    .then(() => {
        console.log("PostgreSQL connected successfully");
    })
    .catch((error) => {
        console.error("Database connection error :", error);
    });
    sequelize.authenticate()
    .then(() => {
        console.log("Sequelize connected successfully");
        console.log("Role model loaded :", Role.name);
        console.log("User model loaded :", User.name);
        console.log("Destination model loaded :", Destination.name);
        console.log("Agency model loaded :", Agency.name);
    })
    .catch((error) => {
        console.error("Sequelize connection error :", error);
    });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});