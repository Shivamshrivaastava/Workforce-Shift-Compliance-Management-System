const Shift = require("../models/shift");
const Audit = require("../models/AuditLog");

exports.createShift = async (req, res) => {
    const shift = await Shift.create({ ...req.body, createdBy: req.user.id });

    await Audit.create({
        action: "SHIFT_CREATED",
        performedBy: req.user.id,
        targetId: shift._id
    });

    res.status(201).json(shift);
};

exports.getShifts = async (req, res) => {
    const { from, to } = req.query;
    res.json(await Shift.find({
        startTime: { $gte: new Date(from), $lte: new Date(to) }
    }));
};