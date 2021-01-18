import errorHandler from '../../../helpers/errorHandler';
import ExampleRepository from '../../repositories/ExampleRepository';

class ExampleController {
  async index(req, res) {
    const { offset, limit, search, sort_field, sort_order } = req.query;
    try {
      const examples = await ExampleRepository.index({
        offset,
        limit,
        search,
        sort_field,
        sort_order,
      });

      return res.json(examples);
    } catch (error) {
      return errorHandler(err, req, res);
    }
  }
}

export default new ExampleController();
