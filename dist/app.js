"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
require('dotenv/config');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('express-async-errors');
var _errorHandler = require('./helpers/errorHandler'); var _errorHandler2 = _interopRequireDefault(_errorHandler);
require('./lib/validation/CustomFormatter');
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    this.server = _express2.default.call(void 0, );

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(_cors2.default.call(void 0, ));
    this.server.use(_bodyparser2.default.json());
  }

  routes() {
    this.server.use(_routes2.default);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      return _errorHandler2.default.call(void 0, err, req, res);
    });
  }
}

exports. default = new App().server;
