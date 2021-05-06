module.exports = (err) => {
  const message = `UNHANDLED ERROR, TYPE: ${err.constructor.name}, MESSAGE: ${err.message}`;
  return { code: 418, message };
};
