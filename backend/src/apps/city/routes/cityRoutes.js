const express = require('express');
const { getCities } = require('../controller/cityController');
const app = express();

app.get('/', (req, res) => {
  getCities(req, res);
});

module.exports = app;
