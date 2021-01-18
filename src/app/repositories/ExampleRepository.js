import { Op } from 'sequelize';
import { searchFields } from '../../helpers/query';
import ExampleResource from '../http/resources/ExampleResource';

class ExampleRepository {
  async index({ offset, limit, search, sort_field, sort_order }) {
    const makeSearch = searchFields(['name']);

    const collection = await Example.findAndCountAll({
      offset,
      limit,
      order: [[sort_field, sort_order]],
      where: {
        [Op.or]: makeSearch(search),
      },
    });

    return ExampleResource.presentCollection({
      collection,
      offset,
      limit,
    });
  }
}

export default new ExampleRepository();
