const dotenv = require('dotenv').config({path: 'config.env'})
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true
        })
        console.log(`Connected to DB: ${connection.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;