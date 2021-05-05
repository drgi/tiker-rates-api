const axios = require('axios');
const reqToBinance = axios.create({
  baseURL: 'https://api.binance.com/api/v3/ticker/price',
  timeout: 5000,
});

module.exports = { reqToBinance };
