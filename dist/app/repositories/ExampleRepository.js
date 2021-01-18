"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _query = require('../../helpers/query');
var _ExampleResource = require('../http/resources/ExampleResource'); var _ExampleResource2 = _interopRequireDefault(_ExampleResource);

class ExampleRepository {
  async index({ offset, limit, search, sort_field, sort_order }) {
    const makeSearch = _query.searchFields.call(void 0, ['name']);

    const collection = await Example.findAndCountAll({
      offset,
      limit,
      order: [[sort_field, sort_order]],
      where: {
        [_sequelize.Op.or]: makeSearch(search),
      },
    });

    return _ExampleResource2.default.presentCollection({
      collection,
      offset,
      limit,
    });
  }
}

exports. default = new ExampleRepository();
