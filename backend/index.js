import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './Routes/userRoute.js'; // Ensure correct import
import cors from 'cors'

dotenv.config();

const app = express();
app.use(bodyParser.json()); // Allows parsing JSON requests
app.use(cors())

const PORT = process.env.PORT||7000
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("DB connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => console.log("MongoDB connection error:", error));

app.use("/api", route); // Attach route

// import express from 'express'
// import bodyParser from 'body-parser'
// import dotenv from 'dotenv'
// import mongoose from 'mongoose'
// import route from './Routes/userRoute.js'

// const app=express();
// app.use(bodyParser.urlencoded({extended:true}))


// const PORT=process.env.PORT || 7000
// dotenv.config()
// const MONGO_URL=process.env.MONGO_URL

// mongoose
//         .connect(MONGO_URL)
//         .then(()=>{
//             console.log("DB connected successfully")
//             app.listen(PORT,()=>{
//                 console.log(`server run on port ${PORT}`)
//             })
//         })
//         .catch((error)=>console.log("the database not connected",error))
// app.use("/api",route)

