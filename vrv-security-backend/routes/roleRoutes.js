const express = require("express");
const { authenticate } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/admin", authenticate, authorize(["Admin"]), (req, res) => {
  res.send("Welcome Admin");
});

router.get("/moderator", authenticate, authorize(["Admin", "Moderator"]), (req, res) => {
  res.send("Welcome Moderator");
});

router.get("/user", authenticate, authorize(["Admin", "Moderator", "User"]), (req, res) => {
  res.send("Welcome User");
});

module.exports = router;
