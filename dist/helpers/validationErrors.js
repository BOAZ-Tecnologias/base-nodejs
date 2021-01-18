"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function validationErrors(errors) {
  return {
    error: {
      name: 'Validation',
      message: 'Validation Errors',
      frames: errors,
    },
  };
} exports.default = validationErrors;
