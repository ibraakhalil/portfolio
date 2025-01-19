import en from './src/messages/en.json';

declare global {
  type IntlMessages = typeof en;
}
