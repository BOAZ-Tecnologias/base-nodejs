"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _PaginatedResource = require('../../../lib/resource/PaginatedResource');

class ExampleResource extends _PaginatedResource.PaginatedResource {
  create(body) {
    return {
      name: body.name,
      status: body.status,
    };
  }

  update(body) {
    return {
      status: body.status,
    };
  }
}

exports. default = new ExampleResource();
