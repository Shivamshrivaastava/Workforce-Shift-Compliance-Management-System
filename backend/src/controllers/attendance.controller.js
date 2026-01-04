const Attendance = require("../models/Attendence");
const Shift = require("../models/shift");

exports.checkIn = async (req, res) => {
    const shift = await Shift.findById(req.body.shiftId);
    const record = await Attendance.create({
        employeeId: shift.employeeId,
        shiftId: shift._id,
        checkIn: new Date()
    });
    res.status(201).json(record);
};

exports.checkOut = async (req, res) => {
    const record = await Attendance.findOne({ shiftId: req.body.shiftId });
    record.checkOut = new Date();

    const worked =
        (record.checkOut - record.checkIn) / 3600000;

    record.overtimeHours = Math.max(0, worked - 8);
    await record.save();

    res.json(record);
};