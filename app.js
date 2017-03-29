'use strict';

// dotenv sets a process.env port
require('dotenv').config();
const express = require('express');
const app = express();

// Express config
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');
// Middleswares
app.use(express.static(__dirname + 'public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.use((req, res, next) => {
  res.render('404');
});

app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
