// require('dotenv').config({path:'./env'})
// or

import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({ path: './env' });

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.error(`App is not able to connect to Database : ${err}`)
            throw err;
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is listening at port number :", process.env.PORT)
        })
    })
    .catch((err) => {
        console.error("Error occured in db connection :", err)

    })







/*
// First Approach
// Commenting this code to learn more advance way of conecting app to database


import express from 'express';

const app=express();


// connecting to mongodb through iife function
// we have added seicolon for proffesional approach


;(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error App is not able to connect to DataBase ",error)
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`Server is listening at port ${process.env.PORT}`)
       })
    }
    catch(err){
        console.error("Error",error)
        throw err
    }
})()

*/