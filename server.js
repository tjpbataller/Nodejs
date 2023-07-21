const express = require("express");
const app = express();

// Route
app.get("/", (req, res)=>{
    res.send("Hello Node JS")
})

app.listen(3000, ()=>{
    console.log("Connected to port 3000")
})