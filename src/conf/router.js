const express = require('express');
const router = express.Router();
const controllers = require('src/controllers/home');

router.get('/', controllers.index);

module.exports = router;