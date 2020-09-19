const mongoose = require("mongoose");
require("dotenv/config");

const dbConfig = process.env.MONGODB_URI || "mongodb://localhost/test";

async function connectDB() {
    await mongoose.connect(
        dbConfig,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
        () => {
            console.log(`Connected to MongoDB at: ${dbConfig}`);
        }
    );
}

module.exports = connectDB;
