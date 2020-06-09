const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static Files
app.use('/', express.static(path.join(__dirname, '../../dist')));

module.exports = app;