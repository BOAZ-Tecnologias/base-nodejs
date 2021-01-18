import 'dotenv/config';
import app from './app';
import './config/i18n';

app.listen(process.env.APP_PORT);
