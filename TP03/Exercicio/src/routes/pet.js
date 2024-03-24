const express = require("express");
const router = express.Router();


const pet_controller = require("../controllers/petController");

router.get('/:id', pet_controller.getPet)

module.exports = router;
