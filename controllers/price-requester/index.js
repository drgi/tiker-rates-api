const PriceRequest = require('./PriceRequester-class');
const getPriceForPairs = async (pairs) => {
  const instOfPair = pairs.map((p) => new PriceRequest(p));
  for (let i = 0; i < instOfPair.length; i++) {
    await instOfPair[i].requestPrice();
  }
  return instOfPair;
};

module.exports = { getPriceForPairs };
