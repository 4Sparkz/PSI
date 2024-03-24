const express = require("express");
const router = express.Router();


const init_controller = require("../controllers/initController");

router.get('/', init_controller.getInit)

module.exports = router;
