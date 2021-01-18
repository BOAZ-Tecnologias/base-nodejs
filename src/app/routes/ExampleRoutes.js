import { Router } from 'express';

import ExampleController from '../http/controllers/ExampleController';

const router = new Router();

const exampleRoutes = path => {
  router.get(`${path}`, ExampleController.index);

  return router;
};

export default exampleRoutes;
