const AuditLog = require("../models/AuditLog");

module.exports = async ({ action, performedBy, targetId }) => {
    await AuditLog.create({ action, performedBy, targetId });
};
