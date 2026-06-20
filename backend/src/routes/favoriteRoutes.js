const express = require("express");
const router = express.Router();

const favoriteController =
    require("../controllers/FavoriteController");

router.get("/", (req, res) =>
    favoriteController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    favoriteController.getById(req, res)
);

router.post("/", (req, res) =>
    favoriteController.create(req, res)
);

router.delete("/:id", (req, res) =>
    favoriteController.delete(req, res)
);

module.exports = router;