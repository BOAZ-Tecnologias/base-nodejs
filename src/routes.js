import { Router } from 'express';
import exampleRoutes from './app/routes/ExampleRoutes';

const routes = new Router();

const path = `/${process.env.API_VERSION}/service`;
const url = string => `${path}${string}`;

routes.use(exampleRoutes(url('/example')));

export default routes;
