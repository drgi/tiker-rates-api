const errorLib = require('./errorTypes');

const errorHandler = (err) => {
  const errType = err.type || 'unknown';
  const handler = errorLib[errType];
  return handler(err);
};
module.exports = { errorHandler };
