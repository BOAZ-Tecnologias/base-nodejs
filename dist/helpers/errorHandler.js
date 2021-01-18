"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _youch = require('youch'); var _youch2 = _interopRequireDefault(_youch);

async function errorHandler(err, req, res, status = 400) {
  const { ERROR_HANDLER } = process.env;

  // TODO: If NODE_ENV=production send a default error message without any data.

  if (ERROR_HANDLER === 'HTML') {
    const errors = await new (0, _youch2.default)(err, req).toHTML();

    res.setHeader('Content-Type', 'text/html');
    return res.send(errors);
  }

  const errors = await new (0, _youch2.default)(err, req).toJSON();
  return res.status(status).json(errors);
}

exports. default = errorHandler;
