const Hero = require("../models/hero");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");


exports.getHero = asyncHandler(async (req, res, next) => {
    try {
        const hero = await Hero.findById(req.params.id).exec()
        res.json(hero);
    } catch {
        res.json({});
    }
});


exports.createHero = [
    // Validate and sanitize the name field.
    body("name").trim(),

    // Process request after validation and sanitization.
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (errors.isEmpty()) {

            const hero = new Hero({ name: req.body.name, pet: req.body.pet });
            await hero.save();
            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }
    }),
];


exports.deleteHero = asyncHandler(async (req, res, next) => {
    try {
        await Hero.findByIdAndDelete(req.params.id)
        res.sendStatus(200);
    } catch {
        res.sendStatus(404);
    }
});
