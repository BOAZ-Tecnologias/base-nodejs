"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _ExampleController = require('../http/controllers/ExampleController'); var _ExampleController2 = _interopRequireDefault(_ExampleController);

const router = new (0, _express.Router)();

const exampleRoutes = path => {
  router.get(`${path}`, _ExampleController2.default.index);

  return router;
};

exports. default = exampleRoutes;
