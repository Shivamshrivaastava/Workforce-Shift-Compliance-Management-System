const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    employeeId: mongoose.Schema.ObjectId,
    type: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Violation", schema);