const Pet = require("../models/pet");
const asyncHandler = require("express-async-handler");


exports.getPet = asyncHandler(async (req, res, next) => {
    try {
        const pet = await Pet.findById(req.params.id).exec()
        res.json(pet);
    } catch {
        res.json({});
    }
});
