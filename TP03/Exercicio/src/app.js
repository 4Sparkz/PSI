const express = require("express")

const app = express()

var pet = require("./routes/pet");
var pets = require("./routes/pets");
const hero = require("./routes/hero");
const heroes = require("./routes/heroes");
const init = require("./routes/init");



const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://areis04net:OaHxZtDOKs177scf@cluster0.rwzipne.mongodb.net/";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}


app.use(express.json())

app.use("/hero", hero);
app.use("/heroes", heroes);
app.use("/pet", pet);
app.use("/pets", pets);
app.use("/init", init);


app.get('/', (req, res) => {
    res.send('Welcome to tour of heroes!');
});

app.listen(3000);

