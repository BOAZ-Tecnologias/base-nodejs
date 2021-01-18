import i18n from 'i18n';
import { resolve } from 'path';

const locales = ['pt_br', 'en', 'es'];

i18n.configure({
  locales,
  defaultLocale: 'pt_br',
  register: global,
  directory: resolve(__dirname, '../../locales'),
});
