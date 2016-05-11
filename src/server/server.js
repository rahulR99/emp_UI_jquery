var express=require("express");
console.log("hello server");

var app = express();
var port= 8000;

app.use(express.static('public/lib'));
app.use(express.static('src/client'));

app.get("/",function(req,res){
    res.send("hello");
});

app.listen(port , function(err){
    console.log("****************************************");
    console.log("running server on port number : "+port);
});

/*var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
/*app.post(port,function){
	
}*/

