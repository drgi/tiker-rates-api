const getParsedResponse = (instOfPairs) => {
  const res = instOfPairs.map((el) => {
    const key = el.getPair();
    const value = el.getPrice();
    return [key, value];
  });
  return Object.fromEntries(res);
};

module.exports = { getParsedResponse };
