const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('/test', (req, res) => {
  res.status = 200;
  res.send('passed!');
});

module.exports = app;
