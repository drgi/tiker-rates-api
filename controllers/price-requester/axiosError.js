module.exports = class AxiosNetworkError extends Error {
  constructor(err) {
    super();
    this.type = 'AxiosNetworkError';
    this.code = err.response.status;
    this.message = `Binance API Error: Reason: ${
      err.response.data.msg
    }, Request params: ${JSON.stringify(err.config.params)}`;
  }
};
