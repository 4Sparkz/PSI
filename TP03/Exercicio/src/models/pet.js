const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: { type: String, require: true }
});


// Export model
module.exports = mongoose.model("Pet", PetSchema);
