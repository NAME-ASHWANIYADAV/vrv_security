require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/db");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to Database
db();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/roles", require("./routes/roleRoutes"));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
