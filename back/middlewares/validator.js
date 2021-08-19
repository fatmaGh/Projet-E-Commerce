const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`fullName`, `Your Name is required`).notEmpty(),
  check(`email`, `Email field is required`).notEmpty(),
  check(`email`, `You should Enter a valid email`).isEmail(),
  check(`password`, `Password field is required`).notEmpty(),
  check(`password`, `You have to enter a valid password`).isLength({
    min: 6,
    max: 10,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors.array());

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
