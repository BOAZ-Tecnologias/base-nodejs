"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _Example = require('../app/models/Example'); var _Example2 = _interopRequireDefault(_Example);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

const models = [_Example2.default];

class Database {
  constructor(db_host, db_user, db_name) {
    this.models = [];
    this.init(db_host, db_user, db_name);
  }

  init(host, username, database) {
    const { DB_HOST, DB_USER, DB_NAME } = process.env;

    this.connection = new (0, _sequelize2.default)({
      ..._database2.default,
      host: DB_HOST || host,
      username: DB_USER || username,
      database: DB_NAME || database,
    });

    this.models = models.map(model => model.init(this.connection));

    this.models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }

  getModels() {
    return this.models.reduce((payload, data) => {
      return {
        ...payload,
        [data.name]: data,
      };
    }, {});
  }

  static sequelize() {
    return new (0, _sequelize2.default)(_database2.default);
  }
}

exports. default = Database;
