'use strict';

// dotenv sets a process.env port
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// Express config
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
// Middleswares
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));


// Routes
app.use(require('./routes/'));


// 404 Middleware
app.use((req, res, next) => {
  res.render('404');
});


// Listen on the set port
app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
