const express = require("express");

const router = express.Router();

const contactMessageController =
    require("../controllers/ContactMessageController");

router.get("/", (req, res) =>
    contactMessageController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    contactMessageController.getById(req, res)
);

router.post("/", (req, res) =>
    contactMessageController.create(req, res)
);

router.delete("/:id", (req, res) =>
    contactMessageController.delete(req, res)
);

module.exports = router;