const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    employeeId: mongoose.Schema.Types.ObjectId,
    shiftId: mongoose.Schema.Types.ObjectId,
    checkIn: Date,
    checkOut: Date,
    overtimeHours: Number

});
module.exports = mongoose.model("Attendence", schema)