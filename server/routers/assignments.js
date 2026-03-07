const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/assignments", authController.getAssignments);
router.post("/query", authController.getResult);

module.exports = router;