import { isEqual } from 'lodash';
import { grey } from 'material-colors';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { Route } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Home from '../containers/Home';

const Root = styled.div`
  color: ${grey['900']};
  margin: 0;
  padding: 0;
`;

export default class App extends Component {
  static defaultProps = {
    locale: 'en',
  };

  static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  componentWillMount() {
    injectGlobal`
      html, body {
        line-height: 1;
        margin: 0;
        padding: 0;
      }
    `;
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.locale !== nextProps.locale,
      !isEqual(this.props.messages, nextProps.messages)
    );
  }

  render() {
    const { locale, messages } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages}>
        <Root lang={locale}>
          <Route component={Home} exact path="/" />
        </Root>
      </IntlProvider>
    );
  }
}
