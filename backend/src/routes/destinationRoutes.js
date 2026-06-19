const express = require("express");
const router = express.Router();

const destinationController =
    require("../controllers/DestinationController");

router.get("/", (req, res) =>
    destinationController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    destinationController.getById(req, res)
);

router.post("/", (req, res) =>
    destinationController.create(req, res)
);
router.put("/:id", (req, res) =>
    destinationController.update(req, res)
);

router.delete("/:id", (req, res) =>
    destinationController.delete(req, res)
);
module.exports = router;