'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();




const PORT = 8080;

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + '/'));

var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

//start the server
app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('DashBoard started on port 8080');
})



function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}
