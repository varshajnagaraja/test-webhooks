var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/payload', function (req, res) {
    console.log("respose ", res)
    res.send("ok");
    
  })
 
app.listen(80)