import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import Home from '../../src/containers/Home';
import enMessages from '../../src/locales/en';
import jaMessages from '../../src/locales/ja';

test('Home container renders English messages', () => {
  const container = renderer.create((
    <IntlProvider locale="en" messages={enMessages}>
      <Home />
    </IntlProvider>
  ));
  const tree = container.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Home container renders Japanese messages', () => {
  const container = renderer.create((
    <IntlProvider locale="ja" messages={jaMessages}>
      <Home />
    </IntlProvider>
  ));
  const tree = container.toJSON();
  expect(tree).toMatchSnapshot();
});
