"use strict";Object.defineProperty(exports, "__esModule", {value: true});class PaginatedResource {
  present(item) {
    return item;
  }

  presentGraphql({ collection, offset, limit }) {
    return {
      items: collection.rows.map(this.present),
      pagination: {
        total: collection.count,
        offset,
        limit,
      },
    };
  }

  presentCollection({ collection, offset, limit }) {
    return {
      total: collection.count,
      offset,
      limit,
      items: collection.rows.map(this.present),
    };
  }
}

exports.PaginatedResource = PaginatedResource;

const BasePaginatedResource = new PaginatedResource();

exports. default = BasePaginatedResource;
