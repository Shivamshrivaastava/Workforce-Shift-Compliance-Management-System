const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*", 
    credentials: true
  })
);

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/shifts", require("./routes/shift.routes"));
app.use("/api/attendance", require("./routes/attendance.routes"));
app.use("/api/compliance", require("./routes/compliance.routes"));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
