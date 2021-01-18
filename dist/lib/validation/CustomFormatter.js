"use strict";var _validator = require('indicative/validator');
var _lodash = require('lodash');

class CustomFormatter {
  constructor() {
    this.errors = [];
  }

  addError(error, field, validation, args) {
    let message = error;

    if (error instanceof Error) {
      validation = 'ENGINE_EXCEPTION';
      message = error.message;
    }

    this.errors.push({ field, validation, message, args });
  }

  toJSON() {
    return this.errors.length ? _lodash.groupBy.call(void 0, this.errors, 'field') : null;
  }
}

_validator.configure.call(void 0, {
  formatter: CustomFormatter,
});
