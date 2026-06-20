const express = require("express");
const router = express.Router();

const reviewController =
    require("../controllers/ReviewController");

router.get("/", (req, res) =>
    reviewController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    reviewController.getById(req, res)
);

router.post("/", (req, res) =>
    reviewController.create(req, res)
);

router.put("/:id", (req, res) =>
    reviewController.update(req, res)
);

router.delete("/:id", (req, res) =>
    reviewController.delete(req, res)
);

module.exports = router;