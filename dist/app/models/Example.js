"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class Example extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.STRING,
          unique: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        status: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: true,
        },
        deleted_at: _sequelize2.default.DATE,
      },
      {
        sequelize,
        tableName: 'Example',
        paranoid: true,
      }
    );

    return this;
  }

  static associate(_models) {}
}

exports. default = Example;
