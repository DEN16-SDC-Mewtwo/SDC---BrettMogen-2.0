var router = require('express').Router();
var controller = require('./controller.js');

router.post('/grocery', controller.controller.create);

router.get('/products', (req, res) => {
  let { page = 1, count = 5 } = req.query;

  `SELECT * FROM products LIMIT ${count}`
});

router.get('/products/:product_id', (req, res) => {
  let { product_id } = req.params;

  `SELECT * FROM products WHERE id=${product_id}`
});

module.exports.router = router;

// `SElECT JSON_ARRAYAGG(JSON_OBJECT(
//   'answer_id', id,
//   'body', body,
//   'date', date,
//   'answerer_name', name,
//   'helpfulness', helpfulness,
//   'photos',(SELECT JSON_ARRAYAGG(
//     JSON_OBJECT(
//       'id', id,
//       'url', url))
//     FROM photos
//     WHERE photos.answer_id = answers.id)
//   ))
//   AS results FROM answers WHERE question_id=? and reported=0 limit ?;`