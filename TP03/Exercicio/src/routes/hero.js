const express = require("express");
const router = express.Router();


const hero_controller = require("../controllers/heroController");

router.get('/:id', hero_controller.getHero)
router.post('/', hero_controller.createHero)
router.delete('/:id', hero_controller.deleteHero)

module.exports = router;
