'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();




const PORT = 8080;

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/settings.html');
});

app.post('/changeImage', function(req,res){
  let request = req.body.selValue;

  res.redirect('/index.html');
});

app.post('/changeTheme', function(req,res){
  console.log(req.body.imge);
  res.redirect('/index.html');
});



//start the server
app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('DashBoard started on port 8080');
})



function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}
