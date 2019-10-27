/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import HomePage from '../HomePage/Loadable';
import LoginPage from '../LoginPage/Loadable';

import GlobalStyle from '../../global-styles';

const App = () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={HomePage} /> */}
        <Route path="/" component={LoginPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
};

export default hot(App);
