'use strict';

const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + 'hello');
});

//start the server
app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('server started on port 8080');
})


//get info on sign in:
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
//function to sign out:




app.get("/time", function (req,res){
  res.status(200).send(func.getTime());
  res.end();
});
