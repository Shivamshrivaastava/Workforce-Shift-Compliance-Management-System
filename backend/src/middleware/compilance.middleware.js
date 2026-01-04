const Shift = require("../models/shift");
const Employee = require("../models/Employee");
const Violation = require("../models/ViolationLog");
const { diffInHours, getWeekStart } = require("../utils/timeUtils");

module.exports = async (req, res, next) => {
  const { employeeId, startTime, endTime } = req.body;
  const employee = await Employee.findById(employeeId);

  // Overlap
  const overlap = await Shift.findOne({
    employeeId,
    startTime: { $lt: endTime },
    endTime: { $gt: startTime }
  });
  if (overlap) {
    await Violation.create({
      employeeId,
      type: "OVERLAP",
      description: "Overlapping shift"
    });
    return res.status(400).json({ message: "Overlapping shift" });
  }

  // Rest period
  const lastShift = await Shift.findOne({ employeeId }).sort({ endTime: -1 });
  if (lastShift) {
    const rest = diffInHours(lastShift.endTime, startTime);
    if (rest < employee.minRestHours) {
      await Violation.create({
        employeeId,
        type: "REST_VIOLATION",
        description: "Insufficient rest"
      });
      return res.status(400).json({ message: "Rest period violation" });
    }
  }

  // Weekly hours
  const weekStart = getWeekStart(startTime);
  const shifts = await Shift.find({
    employeeId,
    startTime: { $gte: weekStart }
  });

  const totalHours =
    shifts.reduce((s, sh) => s + diffInHours(sh.startTime, sh.endTime), 0) +
    diffInHours(startTime, endTime);

  if (totalHours > employee.maxWeeklyHours) {
    await Violation.create({
      employeeId,
      type: "WEEKLY_LIMIT",
      description: "Weekly limit exceeded"
    });
    return res.status(400).json({ message: "Weekly hour limit exceeded" });
  }

  next();
};