var express = require('express');
var app = express();
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
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