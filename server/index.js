const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")

try{
    mongoose.connect("mongodb+srv://murali:Murali1234567890@cluster0.ev7pbcx.mongodb.net/?retryWrites=true&w=majority");
    console.log("database Connected");
}
catch(err){
    console.log("Something went wrong with database")
}


app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api",require("./routes/api"))

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.listen(4000,()=>{
    console.log("Listening to port 4000")
})
