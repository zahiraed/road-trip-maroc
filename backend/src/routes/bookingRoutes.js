const express = require("express");
const router = express.Router();

const bookingController =
    require("../controllers/BookingController");

router.get("/", (req, res) =>
    bookingController.getAll(req, res)
);
router.get(
    "/user/:userId",
    (req, res) =>
        bookingController.getByUserId(req, res)
);
router.get("/:id", (req, res) =>
    bookingController.getById(req, res)
);

router.post("/", (req, res) =>
    bookingController.create(req, res)
);

router.put("/:id", (req, res) =>
    bookingController.update(req, res)
);

router.delete("/:id", (req, res) =>
    bookingController.delete(req, res)
);

module.exports = router;