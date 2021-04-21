const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const path = require('path');
const getProducts = require('./appHelpers/getProducts.js');
const getReviews = require('./reviewHelpers/getReviews.js');
const updateHelpful = require('./reviewHelpers/helpfulness.js');
const getMetaData = require('./reviewHelpers/getMeta.js');
const sendReview = require('./reviewHelpers/sendReview.js');
const sendReport = require('./reviewHelpers/sendReport.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fetchQuestions = require('./questionsHelpers/fetchQuestions.js');
const fetchAnswers = require('./questionsHelpers/fetchAnswers.js');

app.use(express.static(path.join(__dirname, 'client', 'dist')));

//  Takes product ID & calls Axios helper
//  in appHelpers/getProducts.js
//  Returns products back to client
app.get('/products', (req, res) => {
  const id = req.params.id;
  getProducts(id).then((response) => {
    res.status(200);
    res.send(response);
  });
});

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

app.put('/reviews/:review_id/report', (req, res) => {
  const id = req.params.review_id;
  sendReport(id).then((response) => {
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
  fetchQuestions(id, (results) => {
    res.send(results);
  });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const id = req.params.question_id;
  fetchAnswers(id, (results) => {
    res.send(results);
  });
});

module.exports = app;
