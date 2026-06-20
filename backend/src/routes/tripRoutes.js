const express = require("express");
const router = express.Router();

const tripController =
    require("../controllers/TripController");

router.get("/", (req, res) =>
    tripController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    tripController.getById(req, res)
);

router.post("/", (req, res) =>
    tripController.create(req, res)
);

router.put("/:id", (req, res) =>
    tripController.update(req, res)
);

router.delete("/:id", (req, res) =>
    tripController.delete(req, res)
);

module.exports = router;