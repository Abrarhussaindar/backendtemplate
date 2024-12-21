const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

let connection;

// use your mongodb database url 
const url = ""

const dbConnect = async () => {
    if (connection) return;
    try {
        connection = await mongoose.connect(url, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log("connected to db");
    } catch (error) {
        console.error("Database connection failed", error);
        throw error;
    }
};

module.exports = dbConnect;
