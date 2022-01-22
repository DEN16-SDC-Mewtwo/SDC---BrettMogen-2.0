let router = require('express').Router();
let connection = require('./databaseConnection.js');

router.get('/products', (req, res) => {
  let { page = 1, count = 5 } = req.query;

  let queryString = 'SELECT * FROM products LIMIT ?';

  connection.query(queryString, [Number(count)], (err, result) => {
    if (err) {
      res.status(400).send('There was an error with your request.');
      console.log('Error:', err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.get('/products/:product_id', (req, res) => {
  let { product_id } = req.params;

  let queryString = `SELECT JSON_ARRAYAGG(JSON_OBJECT(
    'id', id,
    'name', name,
    'slogan', slogan,
    'description', description,
    'category', category,
    'default_value', default_value,
    'features',(SELECT JSON_ARRAYAGG(
      JSON_OBJECT(
      'feature', feature,
      'value', value))
      FROM product_features WHERE product_features.product_id = products.id)
  ))
  AS results FROM products LIMIT ?;`;

  connection.query(queryString, [product_id], (err, result) => {
    if (err) {
      res.status(400).send('There was an error with your request.');
      console.log('Error:', err);
    } else if (result) {
      res.status(200).send(result);
    }
  });
});

router.get('/products/:product_id/styles', (req, res) => {
  let { product_id } = req.params;

  let queryString = `SELECT JSON_ARRAYAGG(JSON_OBJECT(
    'product_id', product_id,

  ))`
})

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