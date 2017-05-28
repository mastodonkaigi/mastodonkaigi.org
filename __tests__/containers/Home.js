import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer from 'react-test-renderer';
import Home from '../../src/containers/Home';
import messages from '../../src/locales/en';

test('Home container renders correctly', () => {
  const container = renderer.create((
    <IntlProvider locale="en" messages={messages}>
      <Home />
    </IntlProvider>
  ));
  const tree = container.toJSON();
  expect(tree).toMatchSnapshot();
});
