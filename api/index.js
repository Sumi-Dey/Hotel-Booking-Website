import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

mongoose.set("strictQuery", false);

const connect = async ()=>{
try {
  await mongoose.connect(process.env.MONGO);
    console.log('connected with backend');
} catch (error) {
  throw error
}
};


//middlewares

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/users",usersRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "There is an error"

  return res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    status: errorStatus,
    stack: err.stack
  })
})

if(process.env.NODE_ENV=="production"){
  app.use(express.static('client/build'));

  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
  })
}

app.listen(PORT,()=>{
    connect();
    console.log('connected with express')
})