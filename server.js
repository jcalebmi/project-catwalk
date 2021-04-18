const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const path = require('path');
const getReviews = require('./reviewHelpers/getReviews.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('/test', (req, res) => {
  res.status = 200;
  res.send('passed!');
});

//Takes product ID & calls Axios helper
//in reviewHelpers/getReviews.js
//Returns reviews back to client
app.get('/reviews/:id', (req, res) => {
  var id = req.params.id;
  getReviews(id).then(response => {
    res.status(200);
    res.send(response);
  });
})
module.exports = app;
