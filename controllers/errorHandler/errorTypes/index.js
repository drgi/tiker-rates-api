const HANDLERS = {};

const errorTypes = [
  { name: 'AxiosNetworkError', path: 'axios.error' },
  { name: 'unknown', path: 'unknown.error' },
  { name: 'ValidationError', path: 'validation.error' },
];

errorTypes.forEach((e) => {
  const handler = require(`./${e.path}.js`);
  HANDLERS[e.name] = handler;
});

module.exports = HANDLERS;
