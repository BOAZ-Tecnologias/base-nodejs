"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 const searchFields = fields => search =>
  fields.map(field => ({
    [field]: {
      [_sequelize.Op.iLike]: `%${search}%`,
    },
  })); exports.searchFields = searchFields;
