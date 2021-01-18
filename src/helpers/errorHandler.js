import Youch from 'youch';

async function errorHandler(err, req, res, status = 400) {
  const { ERROR_HANDLER } = process.env;

  // TODO: If NODE_ENV=production send a default error message without any data.

  if (ERROR_HANDLER === 'HTML') {
    const errors = await new Youch(err, req).toHTML();

    res.setHeader('Content-Type', 'text/html');
    return res.send(errors);
  }

  const errors = await new Youch(err, req).toJSON();
  return res.status(status).json(errors);
}

export default errorHandler;
