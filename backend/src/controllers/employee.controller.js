const Employee = require("../models/Employee");

exports.create = async (req, res) => {
    const emp = await Employee.create(req.body);
    res.status(201).json(emp);
};

exports.getAll = async (req, res) => {
    res.json(await Employee.find().populate("userId"));
};