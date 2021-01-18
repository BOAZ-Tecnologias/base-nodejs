"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ExampleRoutes = require('./app/routes/ExampleRoutes'); var _ExampleRoutes2 = _interopRequireDefault(_ExampleRoutes);

const routes = new (0, _express.Router)();

const path = `/${process.env.API_VERSION}/service`;
const url = string => `${path}${string}`;

routes.use(_ExampleRoutes2.default.call(void 0, url('/example')));

exports. default = routes;
