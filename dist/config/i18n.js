"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _i18n = require('i18n'); var _i18n2 = _interopRequireDefault(_i18n);
var _path = require('path');

const locales = ['pt_br', 'en', 'es'];

_i18n2.default.configure({
  locales,
  defaultLocale: 'pt_br',
  register: global,
  directory: _path.resolve.call(void 0, __dirname, '../../locales'),
});
