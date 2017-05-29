import { grey } from 'material-colors';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import LanguageSelector from '../components/LanguageSelector';
import LazyLoader from '../components/LazyLoader';

const Root = styled.div`
  color: ${grey['900']};
  margin: 0;
  padding: 0;
`;

export default class Main extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        locale: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { locale } = this.props.match.params;
    return (
      <LanguageSelector locale={locale}>
        <Root lang={locale}>
          <Switch>
            <Route exact path={`/${locale}/`} render={props => <LazyLoader name="Home" {...props} />} />
            <Route render={props => <LazyLoader name="NoMatch" {...props} />} />
          </Switch>
        </Root>
      </LanguageSelector>
    );
  }
}
