'use strict';

// dotenv sets a process.env port
require('dotenv').config();
const express = require('express');
const app = express();

// Express config
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
// Middleswares
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.use((req, res, next) => {
  res.render('404');
});

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
