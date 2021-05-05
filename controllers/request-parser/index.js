const parseAndValidateStringRequest = ({ pairs }) => {
  if (!pairs) throw new Error('No requested fields in request');
  const pairsArr = pairs.split(',');
  pairsArr.forEach((p) => {
    if (!_pairValidator(p))
      throw new Error(`One of request params have invalid format ${p}`);
  });
  return pairsArr;
};

const parseAndVailidateArrRequest = (pairs) => {
  return pairs;
};
const _pairValidator = (str) => {
  return /[A-Z]*-[A-Z]*/.test(str);
};

module.exports = { parseAndValidateStringRequest, parseAndVailidateArrRequest };
