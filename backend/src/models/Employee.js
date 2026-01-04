const mongoose = require('mongoose');
const schema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    department: String,
    maxWeeklyHours: { type: Number, default: 48 },
    minRestHours: { type: Number, default: 12 }
});
module.exports = mongoose.model("Employee", schema);