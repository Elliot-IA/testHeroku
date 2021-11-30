const express = require("express"); 
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

console.log("Test Server Initiated! Working Directory (for server js file):"+path.join(__dirname, "."));

app.use(express.static(path.join(__dirname, ".")));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/testPage.html");
});

app.post("/", function(req, res){
    if(req.body.command == "updateHOTLINKS"){
        //console.log("HOTLINKS Data recieved:" + req.body.data);
        //writeOverHOTLINKS(req.body.data, res);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function(){
    console.log("Server started on port 8080");
});