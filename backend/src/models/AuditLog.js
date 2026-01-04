const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    action: String,
    performedBy: mongoose.Schema.Types.ObjectId,
    targetId: mongoose.Schema.Types.ObjectId,
    timeStamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model("AuditLog", schema)