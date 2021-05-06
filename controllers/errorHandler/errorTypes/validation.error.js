module.exports = (err) => {
  const message = err.message;
  const code = err.code;
  return { code, message };
};
