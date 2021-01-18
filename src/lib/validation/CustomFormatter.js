import { configure } from 'indicative/validator';
import { groupBy } from 'lodash';

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
    return this.errors.length ? groupBy(this.errors, 'field') : null;
  }
}

configure({
  formatter: CustomFormatter,
});
