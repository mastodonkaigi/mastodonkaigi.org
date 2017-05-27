import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

const ACCEPTABLE_LANGUAGES = ['en', 'ja'];

function getLocale() {
  const locale = navigator.language;
  return ACCEPTABLE_LANGUAGES.includes(locale) ? locale : 'en';
}

const render = (element, container) => new Promise((resolve, reject) => {
  try {
    ReactDOM.render(element, container, resolve);
  } catch (error) {
    reject(error);
  }
});

async function main() {
  const locale = getLocale();
  const [
    { default: messages },
    localeData,
  ] = await Promise.all([
    import(/* webpackChunkName: "locale/[request]" */ `./locales/${locale}`),
    import(/* webpackChunkName: "react-intl/locale-data/[request]" */ `react-intl/locale-data/${locale}`),
  ]);
  addLocaleData(localeData);
  const container = document.getElementById('root');
  await render((
    <Router>
      <App locale={locale} messages={messages} />
    </Router>
  ), container);
}

main();
