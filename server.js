var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/payload', function (req, res) {
    console.log("request obj ",req.body);
    res.send("ok");
    
  })

  
console.log("server started") 
app.listen(80)