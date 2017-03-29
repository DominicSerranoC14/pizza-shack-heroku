'use strict';

// dotenv sets a process.env port
require('dotenv').config();
const express = require('express');
const app = express();

// Middleswares
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'pug');


app.listen(app.get('port'), () => {
  console.log(`listening on port ${app.get('port')}`);
});
