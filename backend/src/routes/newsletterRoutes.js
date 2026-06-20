const express = require("express");

const router = express.Router();

const newsletterController =
    require("../controllers/NewsletterController");

router.get("/", (req, res) =>
    newsletterController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    newsletterController.getById(req, res)
);

router.post("/", (req, res) =>
    newsletterController.create(req, res)
);

router.delete("/:id", (req, res) =>
    newsletterController.delete(req, res)
);

module.exports = router;