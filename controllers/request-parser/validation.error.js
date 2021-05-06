module.exports = class ValidationError extends Error {
  constructor(err, opt) {
    super();
    this.type = 'ValidationError';
    this.code = opt.code || 400;
    this.message = opt.message || 'No message, ValidatonError';
  }
};
