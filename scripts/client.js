'use strict';

const express = require('express');

// Client to serve the apis to the server:
//server functions:

let api key ='fd013456d67545e37569c08b99516236';
let city = 'Portsmouth';
let url =   `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${fd013456d67545e37569c08b99516236}`


// key for openweather: fd013456d67545e37569c08b99516236

request(url, function (err, req,res) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
