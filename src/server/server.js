var express=require("express");
console.log("hello server");
var router=express.Router();
var app = express();
var port= 8000;

/*app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
 });*/

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
 
  next();
});

app.use(express.static('public/lib'));
app.use(express.static('src/client'));
/*app.get("/",function(req,res){
    res.send("hello");
});
app.post("/",function(req,res){
    res.send("hello");
});*/
app.listen(port , function(err){
    console.log("****************************************");
    console.log("running server on port number : "+port);
});



