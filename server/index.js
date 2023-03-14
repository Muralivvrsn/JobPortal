const express = require('express');
const cors = require('cors');
const app = express();



app.use(cors());
app.use(express.json());
app.use("/api",require("./routes/api"))

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.listen(4000,()=>{
    console.log("Listening to port 4000")
})
