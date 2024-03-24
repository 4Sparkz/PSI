const express = require("express");
const router = express.Router();


const pets_controller = require("../controllers/petsController");

router.get('/', pets_controller.getPets)

module.exports = router;
