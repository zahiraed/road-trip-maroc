const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./src/config/database");

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
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});