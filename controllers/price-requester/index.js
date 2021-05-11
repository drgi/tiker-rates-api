const PriceRequest = require('./PriceRequester-class');
const AxiosNetworkError = require('./axiosError');
const getPriceForPairs = async (pairs) => {
  try {
    const instOfPair = pairs.map((p) => new PriceRequest(p));
    const promises = [];
    instOfPair.forEach((p) => promises.push(p.requestPrice()));
    await Promise.all(promises);
    return instOfPair;
  } catch (err) {
    if (err.isAxiosError) {
      throw new AxiosNetworkError(err);
    }
    throw err;
  }
};

module.exports = { getPriceForPairs };
