const Hero = require("../models/hero");
const asyncHandler = require("express-async-handler");


exports.getHeroes = asyncHandler(async (req, res, next) => {
    try {
        const heroes = await Hero.find().exec()
        res.json(heroes);
    } catch {
        res.json({});
    }
});
