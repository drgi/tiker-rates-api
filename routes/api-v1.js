const express = require('express');
const router = express.Router();

const {
  parseAndValidateStringRequest,
  parseAndVailidateArrRequest,
} = require('../controllers/request-parser');
const { getPriceForPairs } = require('../controllers/price-requester');
const { getParsedResponse } = require('../controllers/response');

router.get('/rates', async (req, res, next) => {
  try {
    const { query } = req;
    const pairs = parseAndValidateStringRequest(query);
    const instOfPair = await getPriceForPairs(pairs);
    const responce = getParsedResponse(instOfPair);
    res.status(200).json(responce);
  } catch (err) {
    next(err);
  }
});

router.post('/rates', async (req, res, next) => {
  try {
    const { pairs } = req.body;
    const parsedPairs = parseAndVailidateArrRequest(pairs);
    const instOfPair = await getPriceForPairs(parsedPairs);
    const responce = getParsedResponse(instOfPair);
    res.status(200).json(responce);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
