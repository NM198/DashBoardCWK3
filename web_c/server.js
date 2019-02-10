'use static';

const express = require('express');
const multer = require('multer');

const db = require('./model-mysql');
const config = require('./config');

const app = express();

//start the server
  const port = process.env.PORT||8080;
  app.listen(port,() => { console.log(`listening on port ${port}...`)
  });
