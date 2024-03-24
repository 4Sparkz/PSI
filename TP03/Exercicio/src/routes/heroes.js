const express = require("express");
const router = express.Router();


const heroes_controller = require("../controllers/heroesController");

router.get('/', heroes_controller.getHeroes)

module.exports = router;
