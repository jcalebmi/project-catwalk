const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const apiToken = require('./myconfig');
const multer = require('multer');

const app = express();
const path = require('path');
const getProduct = require('./appHelpers/getProduct.js');
const getReviews = require('./reviewHelpers/getReviews.js');
const updateHelpful = require('./reviewHelpers/helpfulness.js');
const getMetaData = require('./reviewHelpers/getMeta.js');
const getStyles = require('./overviewHelpers/getStyles.js');
const sendReview = require('./reviewHelpers/sendReview.js');
const sendReport = require('./reviewHelpers/sendReport.js');
const sortData = require('./questionsHelpers/sortData.js');

const fetchQuestions = require('./questionsHelpers/fetchQuestions.js');
const fetchAnswers = require('./questionsHelpers/fetchAnswers.js');
const { putQuestionsHelpful, putQuestionsReported } = require('./questionsHelpers/putQuestions.js');
const { putAnswersHelpful, putAnswersReported } = require('./questionsHelpers/putAnswers.js');
const postNewQuestions = require('./questionsHelpers/postQuestions.js');
const postNewAnswers = require('./questionsHelpers/postAnswers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Takes product ID & calls Axios helper
// in appHelpers/getProducts.js
// Returns products back to client
app.get('/product/:product_id', (req, res) => {
  const id = req.params.product_id;
  getProduct(id).then((response) => {
    res.status(200);
    res.send(response);
  });
});

// Gets styles
app.get('/styles/:product_id', (req, res) => {
  const id = req.params.product_id;
  getStyles(id).then((styles) => {
    res.status(200);
    res.send(styles.results);
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

app.get('/qa/questions/:productId/', (req, res) => {
  const { productId } = req.params;
  fetchQuestions(productId, (questions) => {
    sortData(questions, 'question_helpfulness', (sorted) => {
      res.send(sorted);
    });
  });
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const id = req.params.question_id;
  fetchAnswers(id, (answers) => {
    sortData(answers, 'answer_helpfulness', (sorted) => {
      res.send(sorted);
    });
  });
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const id = req.params.question_id;
  putQuestionsHelpful(id);
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const id = req.params.question_id;
  putQuestionsReported(id, (helpNum) => {
    res.send(helpNum);
  });
});
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const id = req.params.answer_id;
  putAnswersHelpful(id);
});
app.put('/qa/answers/:answer_id/report', (req, res) => {
  const id = req.params.answer_id;
  putAnswersReported(id);
});

app.post('/qa/questions/', (req, res) => {
  const { body } = req;
  postNewQuestions(body);
});

app.post('/qa/questions/:question_id/answers', (req) => {
  console.log(req.body, req.params.question_id)
  const { body } = req;
  const id = req.params.question_id;
  postNewAnswers(id, body);
});

module.exports = app;
