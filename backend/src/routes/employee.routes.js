const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

/**
 * POST /api/employees
 * Create employee profile
 * Access: ADMIN, MANAGER
 */
router.post(
  "/",
  auth,
  role("ADMIN", "MANAGER"),
  employeeController.create
);

/**
 * GET /api/employees
 * Fetch all employees
 * Access: ADMIN, MANAGER
 */
router.get(
  "/",
  auth,
  role("ADMIN", "MANAGER"),
  employeeController.getAll
);

module.exports = router;
