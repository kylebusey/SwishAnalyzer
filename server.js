const express = require('express');
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = 3000;


app.set("view engine", "hbs")
app.use(express.static('public'))
app.use("/assets", express.static(path.join(__dirname, "/public/assets")));




app.get("/", (req, res) => {  
    res.render("index");
});
app.listen(port, (req, res) => { 
    console.log(`Server listening on ${port}`);
});



