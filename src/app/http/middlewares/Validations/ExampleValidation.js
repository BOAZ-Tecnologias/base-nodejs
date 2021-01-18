import { validateAll } from 'indicative/validator';
import {
  REQUIRED_RULE,
  BOOLEAN_RULE,
  STRING_RULE,
} from '../../../../constants/errors';
import validationErrors from '../../../../helpers/validationErrors';

class ExampleValidation {
  async validadeCreate(req, res, next) {
    try {
      const rules = {
        name: 'required|string|min:1',
        status: 'boolean',
      };

      const messages = {
        required: (field) => __(REQUIRED_RULE, { field }),
        string: (field) => __(STRING_RULE, { field }),
        boolean: (field) => __(BOOLEAN_RULE, { field }),
      };
      req.validatedBody = await validateAll(req.body, rules, messages);

      return next();
    } catch (e) {
      return res.status(422).json(validationErrors(e));
    }
  }

  async validadeUpdate(req, res, next) {
    try {
      const rules = {
        status: 'boolean',
      };

      const messages = {
        boolean: (field) => __(BOOLEAN_RULE, { field }),
      };
      req.validatedBody = await validateAll(req.body, rules, messages);

      return next();
    } catch (e) {
      return res.status(422).json(validationErrors(e));
    }
  }
}

export default new ExampleValidation();
