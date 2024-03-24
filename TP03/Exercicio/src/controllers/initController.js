const Pet = require("../models/pet");
const Hero = require("../models/hero");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");


exports.getInit = asyncHandler(async (req, res, next) => {

    mongoose.connection.collections['heros'].drop()
    mongoose.connection.collections['pets'].drop()

    await newHeroes()
    await newPets()

    res.send('DATABASE POPULATED');
});


async function newHeroes() {
    await Promise.all([
        createHero('macaco'),
        createHero('babuino'),
        createHero('orangotango'),
        createHero('lemur'),
        createHero('gorila')
    ]);
}


async function newPets() {
    await Promise.all([
        createPet('tarantula'),
        createPet('long legs'),
        createPet('aranha homem'),
        createPet('aranha da agua'),
        createPet('nao aranha')
    ]);
}


async function createHero(req) {
    const hero = new Hero({ name: req });
    await hero.save();
}

async function createPet(req) {
    const pet = new Pet({ name: req });
    await pet.save();
}
