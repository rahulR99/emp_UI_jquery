var express=require("express");
console.log("hello server");

var app = express();
var port= 5000;

app.use(express.static('public/lib'));
app.use(express.static('src/client'));

app.get("/",function(req,res){
    res.send("hello");
});

app.listen(port , function(err){
    console.log("****************************************");
    console.log("running server on port number : "+port);
});

