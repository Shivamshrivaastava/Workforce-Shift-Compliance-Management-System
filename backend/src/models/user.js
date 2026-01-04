const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ["ADMIN", "MANAGER", "EMPLOYEE"]
    }
}, { timestamps: true })

schema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
})
module.exports = mongoose.model("User", schema)