const mongoose = require("mongoose");

module.exports = mongoose.model("Shift", new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  startTime: Date,
  endTime: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true }));