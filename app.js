const express = require("express");
const mongoose = require("mongoose");
var path = require("path");


const app = express();

mongoose.connect("mongodb://localhost/QuoteRanks", {useNewUrlParser: true});

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());

require("./server/routes")(app);

app.all("*", (req, res, next)=>{
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

const port = 8000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));