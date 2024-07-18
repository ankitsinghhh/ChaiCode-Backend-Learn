import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";

dotenv.config({
    path: './env'
});

const app = express();

// Connect to MongoDB database using environment variable
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed!!!!", err);
    });

// Uncommented code example of an alternative approach to connect the database
/*
import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/DB_NAME`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.on("error", (error) => {
            console.log("Error", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listening on PORT: ${process.env.PORT || 8000}`);
        });
    } catch (err) {
        console.error("ERROR", err);
        throw err;
    }
})();
*/

