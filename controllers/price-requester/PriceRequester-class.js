const { reqToBinance } = require('./axios');

class PriceRequest {
  constructor(pair) {
    this.pair = pair;
    this.pairForReq = pair.split('-').join('');
    this.reqToBinance = reqToBinance.get.bind(this, '', {
      params: { symbol: this.pairForReq },
    });
    this.price = null;
  }
  async requestPrice() {
    const res = await this.reqToBinance();
    const { data } = res;
    this.price = Number(data.price);
  }
  getPair() {
    return this.pair;
  }
  getPrice() {
    return Number(this.price.toFixed(2));
  }
}

module.exports = PriceRequest;
