const express = require("express");
const router = express.Router();

const paymentController =
    require("../controllers/PaymentController");

router.get("/", (req, res) =>
    paymentController.getAll(req, res)
);

router.get("/:id", (req, res) =>
    paymentController.getById(req, res)
);

router.post("/", (req, res) =>
    paymentController.create(req, res)
);

router.put("/:id", (req, res) =>
    paymentController.update(req, res)
);

router.delete("/:id", (req, res) =>
    paymentController.delete(req, res)
);

module.exports = router;