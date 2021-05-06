const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json({ limit: '10mb' }));
//Routes
const rates = require('./routes/api-v1');
app.use('/api/v1/', rates);

//Error handler
const { errorHandler } = require('./controllers/errorHandler');
app.use((err, req, res, next) => {
  const error = errorHandler(err);
  if (!error) {
    return res.status(500).json({ error: 'Uknown server error:)))))' });
  }
  res.status(error.code).json({ error: error.message });
});

module.exports = app;
