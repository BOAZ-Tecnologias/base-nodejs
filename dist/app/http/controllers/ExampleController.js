"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _errorHandler = require('../../../helpers/errorHandler'); var _errorHandler2 = _interopRequireDefault(_errorHandler);
var _ExampleRepository = require('../../repositories/ExampleRepository'); var _ExampleRepository2 = _interopRequireDefault(_ExampleRepository);

class ExampleController {
  async index(req, res) {
    const { offset, limit, search, sort_field, sort_order } = req.query;
    try {
      const examples = await _ExampleRepository2.default.index({
        offset,
        limit,
        search,
        sort_field,
        sort_order,
      });

      return res.json(examples);
    } catch (error) {
      return _errorHandler2.default.call(void 0, err, req, res);
    }
  }
}

exports. default = new ExampleController();
