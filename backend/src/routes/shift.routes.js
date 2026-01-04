const express = require("express");
const router = express.Router();

const shiftController = require("../controllers/shift.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const compliance = require("../middleware/compilance.middleware");

/**
 * POST /api/shifts
 * Create shift after compliance validation
 * Access: ADMIN, MANAGER
 */
router.post(
    "/",
    auth,
    role("ADMIN", "MANAGER"),
    compliance,
    shiftController.createShift
);

/**
 * GET /api/shifts?from=&to=
 * Fetch shifts within date range
 * Access: ADMIN, MANAGER, EMPLOYEE
 */
router.get(
    "/",
    auth,
    shiftController.getShifts
);

module.exports = router;
