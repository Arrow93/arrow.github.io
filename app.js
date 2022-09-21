const { response } = require("express");
const express = require("express");
const app = express();

app.get("/",function(req, resp){
    resp.sendFile(__dirname + "/wys.html");
});
app.listen(3000);
