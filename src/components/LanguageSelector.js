import { isEqual } from 'lodash';
import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Redirect } from 'react-router-dom';

export default class LanguageSelector extends Component {
  static defaultProps = {
    children: null,
  };

  static propTypes = {
    children: PropTypes.element,
    locale: PropTypes.string.isRequired,
  };

  state = {
    errorComponent: null,
    messages: {},
  };

  componentWillMount() {
    if (this.props.locale) {
      this.load(this.props).catch(() => {
        this.setState({ errorComponent: <Redirect to="/" /> });
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.errorComponent !== nextState.errorComponent ||
      !isEqual(this.state.messages, nextState.messages) ||
      this.props.locale !== nextProps.locale
    );
  }

  async load({ locale }) {
    const [
      { default: messages },
      localeData,
    ] = await Promise.all([
      import(/* webpackChunkName: "locale/[request]" */ `../locales/${locale}`),
      import(/* webpackChunkName: "react-intl/locale-data/[request]" */ `react-intl/locale-data/${locale}`),
    ]);
    addLocaleData(localeData);
    this.setState({ messages });
  }

  render() {
    const { errorComponent, locale, messages } = { ...this.props, ...this.state };
    if (!messages || Object.keys(messages).length < 1) {
      return errorComponent;
    }
    return (
      <IntlProvider locale={locale} messages={messages}>
        {Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}
