const express = require('express');

let dios = require('../controller/diosesC.js');

let router = express.Router();

router.get('/', dios.list);

module.exports = routers;