const express = require('express');
const app = express();
const router = require('src/conf/router');
                  
app.use('/', router);

const port = process.env.APP_PORT || 3000;

module.exports = app;