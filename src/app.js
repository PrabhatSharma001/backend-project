import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';



const app=express();

// 1 Cors configurations

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,

}))

//  2 Json request configurations 

app.use(express.json({
    limit:"16kb",
}))

//  3 URL Request data configuration
// used extended so we can get information from object inside object

app.use(express.urlencoded({extended:true,
    limit:"16kb",
}))

// Static method of expres to store assets on server for public use 
app.use(express.static("public"))


//  Added cookie parser to perform crud operation on cookies
// cookie parser is use to recieve or set money from user's web browser to server
app.use(cookieParser())




export default app;