const { response } = require("express");
const express = require("express");
const app = express();

app.get("/",function(req, resp){
    resp.sendFile(__dirname + "/app.html");
});
app.listen(3000);