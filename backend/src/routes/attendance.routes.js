const express = require("express");
const router = express.Router();

const attendanceController = require("../controllers/attendance.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

/**
 * POST /api/attendance/check-in
 * Employee check-in for a shift
 * Access: EMPLOYEE
 */
router.post(
  "/check-in",
  auth,
  role("EMPLOYEE"),
  attendanceController.checkIn
);

/**
 * POST /api/attendance/check-out
 * Employee check-out and overtime calculation
 * Access: EMPLOYEE
 */
router.post(
  "/check-out",
  auth,
  role("EMPLOYEE"),
  attendanceController.checkOut
);

module.exports = router;
