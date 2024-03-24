const Pet = require("../models/pet");
const asyncHandler = require("express-async-handler");


exports.getPets = asyncHandler(async (req, res, next) => {
    try {
        const pets = await Pet.find().exec()
        res.json(pets);
        //res.json(pets.map(p => p._id))
    } catch {
        res.json({});
    }
});
