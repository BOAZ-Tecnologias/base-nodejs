"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _validator = require('indicative/validator');




var _errors = require('../../../../constants/errors');
var _validationErrors = require('../../../../helpers/validationErrors'); var _validationErrors2 = _interopRequireDefault(_validationErrors);

class ExampleValidation {
  async validadeCreate(req, res, next) {
    try {
      const rules = {
        name: 'required|string|min:1',
        status: 'boolean',
      };

      const messages = {
        required: (field) => __(_errors.REQUIRED_RULE, { field }),
        string: (field) => __(_errors.STRING_RULE, { field }),
        boolean: (field) => __(_errors.BOOLEAN_RULE, { field }),
      };
      req.validatedBody = await _validator.validateAll.call(void 0, req.body, rules, messages);

      return next();
    } catch (e) {
      return res.status(422).json(_validationErrors2.default.call(void 0, e));
    }
  }

  async validadeUpdate(req, res, next) {
    try {
      const rules = {
        status: 'boolean',
      };

      const messages = {
        boolean: (field) => __(_errors.BOOLEAN_RULE, { field }),
      };
      req.validatedBody = await _validator.validateAll.call(void 0, req.body, rules, messages);

      return next();
    } catch (e) {
      return res.status(422).json(_validationErrors2.default.call(void 0, e));
    }
  }
}

exports. default = new ExampleValidation();
