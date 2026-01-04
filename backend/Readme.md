# Workforce Shift & Compliance Management System – Backend

This repository contains the **backend implementation** of the Workforce Shift & Compliance Management System built using the **MERN stack**. The backend is responsible for authentication, role-based access control, employee and shift management, attendance tracking, compliance enforcement, and audit logging.

The system is designed to solve real-world workforce scheduling problems by **preventing non-compliant shift assignments before they are created**, ensuring labor-law adherence and operational transparency.

---

## Tech Stack

* **Node.js** – Runtime environment
* **Express.js** – REST API framework
* **MongoDB** – Database
* **Mongoose** – ODM for MongoDB
* **JWT** – Authentication & authorization
* **bcrypt** – Password hashing
* **CORS** – Frontend-backend communication

---

## Key Features

* Role-based access control (Admin, Manager, Employee)
* Automated shift scheduling with compliance validation
* Prevention of overlapping shifts
* Weekly working hour limit enforcement
* Mandatory rest period enforcement between shifts
* Attendance tracking (check-in / check-out)
* Overtime calculation
* Compliance violation logging
* Full audit trail for critical actions
* Frontend-ready with CORS support

---

## Folder Structure

```
backend/
├── src/
│   ├── config/          # DB & JWT configuration
│   ├── controllers/    # Route handlers
│   ├── middleware/     # Auth, RBAC, compliance checks
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API route definitions
│   ├── utils/          # Audit & time utilities
│   └── app.js          # Express app setup
│
├── server.js            # Server entry point
├── package.json
└── .env                 # Environment variables
```

---

## Environment Variables

Create a `.env` file in the backend root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/workforce_db
JWT_SECRET=your_secret_key
```

---

## Installation & Setup

1. Clone the repository
2. Navigate to the backend folder

```
cd backend
```

3. Install dependencies

```
npm install
```

4. Start the development server

```
npm run dev
```

The server will run on:

```
http://localhost:5000
```

---

## Authentication Flow

1. Register a user (Admin / Manager / Employee)
2. Login to receive a JWT token
3. Pass the token in the `Authorization` header as:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## API Overview

### Authentication

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Login and receive JWT

### Employees

* `POST /api/employees` – Create employee profile (Admin/Manager)
* `GET /api/employees` – Fetch all employees

### Shifts

* `POST /api/shifts` – Create shift (with compliance validation)
* `GET /api/shifts?from=&to=` – Fetch shifts by date range

### Attendance

* `POST /api/attendance/check-in` – Employee check-in
* `POST /api/attendance/check-out` – Employee check-out & overtime calculation

### Compliance

* `GET /api/compliance/violations` – Fetch compliance violation logs

---

## Core Compliance Rules Enforced

* No overlapping shifts for the same employee
* Weekly working hours cannot exceed configured limit
* Minimum rest period between consecutive shifts
* Overtime calculated automatically during attendance
* Violations logged without allowing invalid data persistence

---

## Audit & Transparency

* Every critical action (e.g., shift creation) is logged in the audit log
* Compliance violations are stored separately for reporting and analysis
* Ensures accountability and traceability

---

## Testing

* All APIs can be tested using Postman
* Use real MongoDB `_id` values when referencing users or employees
* Follow correct flow: Register → Login → Create Employee → Create Shift → Attendance

---

## Notes

* The backend strictly validates ObjectIds to prevent invalid references
* Designed with scalability and maintainability in mind
* Ready for frontend (React) integration

---

## Future Enhancements

* Swagger / OpenAPI documentation
* Automated test cases (Jest)
* Advanced reporting & analytics
* Shift update and cancellation workflows
* Deployment hardening (rate limiting, logging)

---

## Conclusion

This backend provides a **robust, compliant, and scalable foundation** for managing shift-based workforces. It is suitable for real-world organizational use cases and demonstrates strong backend architecture practices.
