import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import errorHandler from './helpers/errorHandler';
import './lib/validation/CustomFormatter';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      return errorHandler(err, req, res);
    });
  }
}

export default new App().server;
