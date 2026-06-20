const express = require("express");
const router = express.Router();

const tripDayController =
    require("../controllers/TripDayController");

router.get("/", (req, res) =>
    tripDayController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    tripDayController.getById(req, res)
);

router.post("/", (req, res) =>
    tripDayController.create(req, res)
);

router.put("/:id", (req, res) =>
    tripDayController.update(req, res)
);

router.delete("/:id", (req, res) =>
    tripDayController.delete(req, res)
);

module.exports = router;