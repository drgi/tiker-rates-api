const PriceRequest = require('./PriceRequester-class');
const AxiosNetworkError = require('./axiosError');
const getPriceForPairs = async (pairs) => {
  try {
    const instOfPair = pairs.map((p) => new PriceRequest(p));
    for (let i = 0; i < instOfPair.length; i++) {
      await instOfPair[i].requestPrice();
    }
    return instOfPair;
  } catch (err) {
    if (err.isAxiosError) {
      throw new AxiosNetworkError(err);
    }
    throw err;
  }
};

module.exports = { getPriceForPairs };
