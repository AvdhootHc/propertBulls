const express = require("express");
const { userController } = require("../../controller");
const router = express.Router();

router.post("/user", userController.createuser);

module.exports = router;
