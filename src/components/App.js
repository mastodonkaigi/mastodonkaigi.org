import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import Main from './Main';

export const ACCEPTABLE_LANGUAGES = ['en', 'ja'];

function getLocale() {
  const [locale] = (navigator.language || '').split('-', 1);
  return ACCEPTABLE_LANGUAGES.includes(locale) ? locale : 'en';
}

export default class App extends Component {
  componentWillMount() {
    injectGlobal`
      html, body {
        line-height: 1;
        margin: 0;
        padding: 0;
      }
    `;
  }

  render() {
    return (
      <Switch>
        <Route path="/:locale" render={props => <Main {...props} />} />
        <Route render={() => <Redirect to={`/${getLocale()}/`} />} />
      </Switch>
    );
  }
}
