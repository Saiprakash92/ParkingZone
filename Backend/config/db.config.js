const mongoose = require('mongoose');
// const logger = require('../logger/api.logger');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {
    const url = process.env.MONGO_URL;

    mongoose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(" MongoDB is connected successfully"))
        .catch((err) => console.log("Error: ", err));
}

module.exports = {
    connectDB
}
