import { PaginatedResource } from '../../../lib/resource/PaginatedResource';

class ExampleResource extends PaginatedResource {
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

export default new ExampleResource();
