const ValidationError = require('./validation.error');
const parseAndValidateStringRequest = ({ pairs }) => {
  if (!pairs) throwValidationError(400, 'No requested fields in request');
  const pairsArr = pairs.split(',');
  pairsArr.forEach((p) => {
    if (!_pairValidator(p))
      throwValidationError(
        400,
        `One of request params have invalid format ${p}`
      );
  });
  return pairsArr;
};

const parseAndVailidateArrRequest = (pairs) => {
  if (!pairs) throwValidationError(400, 'No requested fields in request');
  if (!Array.isArray(pairs))
    throwValidationError(400, 'Params [pairs], must be array');
  pairs.forEach((p) => {
    if (!_pairValidator(p))
      throwValidationError(
        400,
        `One of request params have invalid format ${p}`
      );
  });
  return pairs;
};
const _pairValidator = (str) => {
  return /[A-Z]*-[A-Z]*/.test(str);
};

const throwValidationError = (code, message) => {
  throw new ValidationError(null, { code, message });
};

module.exports = { parseAndValidateStringRequest, parseAndVailidateArrRequest };
