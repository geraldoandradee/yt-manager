process.env.NODE_PATH = __dirname;
require("module").Module._initPaths();

const express = require('express');
const app = express();
const router = require('app/conf/router');
                  
app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server listening on port %s', port);
});