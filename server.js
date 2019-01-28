var express = require('express');
var app = express();
const ps = require("python-shell");
var fs = require('fs');
const bodyParser = require("body-parser");
var script_path ="./script.py";
var log_file_path = "../tmp/webhook-listener-console-log.txt";

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

var trueLog = console.log;
console.log = function(msg) {
    fs.appendFile(log_file_path, msg, function(err) {
        if(err) {
            return trueLog(err);
        }
    });
    trueLog(msg); //uncomment if you want logs
}

app.post('/payload', function (req, res) {
    var version = JSON.parse(req.body.payload).ref;
    var owner = JSON.parse(req.body.payload).repository.owner.login;
    var repo_name = JSON.parse(req.body.payload).repository.name;
    console.log("============================================================");
    let msg = "New tag, Version: "+version+" Owner: "+owner+" REpo name: "+repo_name+" || ";
    console.log(msg);   
    var options = {
        args:[
             owner, repo_name, version
        ]
    }

    
    ps.PythonShell.run(script_path, options, function (err, data) {
        if (err){
            res.send(err);
            console.log("error in updating config file: ", err);
        } 
        else{
            let msg = "Updated config file successfully: ";
            data.forEach(function(element) {
                msg = msg +",  "+ element;
            });   
            console.log(msg);         
            res.send("ok");
        }
        
    });
})

console.log("server started") 

app.listen(80)