const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const path = require('path');
const getProduct = require('./appHelpers/getProduct.js');
const getReviews = require('./reviewHelpers/getReviews.js');
const updateHelpful = require('./reviewHelpers/helpfulness.js');
const getMetaData = require('./reviewHelpers/getMeta.js');
const getStyles = require('./overviewHelpers/getStyles.js');
const sendReview = require('./reviewHelpers/sendReview.js');

const fetchQuestions = require('./questionsHelpers/fetchQuestions.js');
const fetchAnswers = require('./questionsHelpers/fetchAnswers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Takes product ID & calls Axios helper
// in appHelpers/getProducts.js
// Returns products back to client
app.get('/products/:product_id', (req, res) => {
  const id = req.params.product_id;
  getProduct(id).then((response) => {
    console.log('success');
    res.status(200);
    res.send(response);
  });
});

// Gets styles
app.get('/products/:product_id/styles', (req, res) => {
  const id = req.params.product_id;
  getStyles(id).then((response) => {
    console.log('success');


//  Takes product ID & calls Axios helper
//  in reviewHelpers/getReviews.js
//  Returns reviews back to client
app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  getReviews(id).then((response) => {
    res.status(200);
    res.send(response);
  });
});
//  Takes product ID and returns Meta Data
//  calls helper in reviewHelpers/getMeta.js
app.get('/reviews/meta/:id', (req, res) => {
  const id = req.params.id;
  getMetaData(id).then((response) => {
    res.status(200);
    res.send(response);
  });
});
//  Updates helpfulness of review
app.put('/reviews/:review_id/helpful', (req, res) => {
  const id = req.params.review_id;
  updateHelpful(id).then((response) => {
    console.log('success');
    res.status(204);
    res.end();
  });
});

app.post('/reviews/', (req, res) => {
  const data = req.body;
  sendReview(data);
});

app.get('/qa/questions/:product_id', (req, res) => {
  const id = req.params.product_id;
  fetchQuestions(id, (err, results) => {
    if (err) throw err;
    if (results !== undefined) res.send(results);
  });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const id = req.params.question_id;
  fetchAnswers(id, (results) => {
    if (results !== undefined) res.send(results);
  });
});

module.exports = app;
