// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/dbconnect.js"

dotenv.config({
    path: './env'
})


connectDB(); // Connect to MongoDB database using environment variable





/*
//this is our first approach to connect the database
import express from "express";
const app = express();
;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on PORT: ${process.env.PORT}`)
        })
    }
    catch(err){
        console.error("ERROR",err);
        throw err;
    }
} )()

*/