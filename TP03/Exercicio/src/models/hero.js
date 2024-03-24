const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    name: { type: String, require: true },
    pet: { type: Schema.Types.ObjectId, require: false }
});


// Export model
module.exports = mongoose.model("Hero", HeroSchema);
