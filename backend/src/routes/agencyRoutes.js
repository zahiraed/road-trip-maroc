const express = require("express");
const router = express.Router();

const agencyController =
    require("../controllers/AgencyController");

router.get("/", (req, res) =>
    agencyController.getAll(req, res)
);

router.get(
    "/:id/dashboard",
    (req, res) =>
        agencyController.getDashboardStats(
            req,
            res
        )
);

router.get(
    "/:id/bookings",
    (req, res) =>
        agencyController.getAgencyBookings(
            req,
            res
        )
);

router.get("/:id", (req, res) =>
    agencyController.getById(req, res)
);

router.post("/", (req, res) =>
    agencyController.create(req, res)
);

router.put("/:id", (req, res) =>
    agencyController.update(req, res)
);

router.delete("/:id", (req, res) =>
    agencyController.delete(req, res)
);

module.exports = router;