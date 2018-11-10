process.env.NODE_PATH = __dirname;
require("module").Module._initPaths();

const app = require('src/app');

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server listening on port %s', port);
});