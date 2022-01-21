var router = require('express').Router();
var controller = require('./controller.js');

router.post('/grocery', controller.controller.create);

router.get('/products', controller.controller.read);

router.delete('/grocery', controller.controller.remove);

module.exports.router = router;

