const express = require("express");
const router = express.Router();

const tripStopController =
    require("../controllers/TripStopController");

router.get("/", (req, res) =>
    tripStopController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    tripStopController.getById(req, res)
);

router.post("/", (req, res) =>
    tripStopController.create(req, res)
);

router.put("/:id", (req, res) =>
    tripStopController.update(req, res)
);

router.delete("/:id", (req, res) =>
    tripStopController.delete(req, res)
);

module.exports = router;