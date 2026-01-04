const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

/**
 * POST /api/auth/register
 * Register a new user (Admin / Manager / Employee)
 */
router.post("/register", authController.register);

/**
 * POST /api/auth/login
 * Login user and return JWT
 */
router.post("/login", authController.login);

module.exports = router;
