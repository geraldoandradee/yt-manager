const express = require('express');
const router = express.Router();
const controllers = require('app/controllers/home');

router.get('/', controllers.index);

module.exports = router;