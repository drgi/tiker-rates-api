const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json({ limit: '10mb' }));
//Routes
const rates = require('./routes/api-v1');
app.use('/api/v1/', rates);

//Error handler
app.use((err, req, res, next) => {
  console.log('Error handler', err);
  if (!err) {
    return res.status(500).json({ error: 'Uknown server error:)))))' });
  }
  res.status(400).json({ error: err.message });
});

module.exports = app;
