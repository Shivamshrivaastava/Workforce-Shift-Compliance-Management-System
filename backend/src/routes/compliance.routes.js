const express = require("express");
const router = express.Router();

const complianceController = require("../controllers/compliance.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

/**
 * GET /api/compliance/violations
 * Fetch all compliance violations
 * Access: ADMIN, MANAGER
 */
router.get(
  "/violations",
  auth,
  role("ADMIN", "MANAGER"),
  complianceController.getViolations
);

module.exports = router;
