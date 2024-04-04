const express = require('express');
const morgan = require('morgan');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(require('./routes/index'));

module.exports = app;
