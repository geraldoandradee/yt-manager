const express = require('express');
const app = express();
const router = require('app/conf/router');
                  
app.use('/', router);

const port = process.env.PORT || 3000;

module.exports = app;