'use strict';


const NewsAPI = require('newsapi');
let url = https:newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=7a6b1574f2be4170947fec9be4dece63;


news = document.getElementById("news");
const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send(news);
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
}
