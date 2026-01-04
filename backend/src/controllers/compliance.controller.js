const Violation = require("../models/ViolationLog");

exports.getViolations = async (req, res) => {
    res.json(await Violation.find());
};