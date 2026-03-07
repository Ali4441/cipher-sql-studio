const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-Controller");


router.get("/assignments", authController.getAssignments);
router.get("/assignments/:id", authController.getAssignmentById);
router.post("/query", authController.getResult);

module.exports = router;