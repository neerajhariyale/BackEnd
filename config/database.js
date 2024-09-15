const mongoose = require("mongoose");


require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {})
    .then( () => console.log("DATABASE CONNECTION SUCCESSFULL"))
    .catch((error) => {
        console.error(error);
        console.log("DATABASE NOT CONNECTED PROPERLY")
        process.exit(1)
    });
}

module.exports = dbConnect;