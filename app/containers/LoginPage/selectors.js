import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeLoginSelector = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.login
  );

const makePasswordSelector = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.password
  );

const makeErrorSelector = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.error
  );

const makeIsMasterSelector = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.isMaster
  );

const makeIsShowPasswordSelector = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.isShowPassword
  );

const makeIsLoadingSelector = () =>
  createSelector(
    selectLoginPageDomain,
    substate => substate.isLoading
  );

export {
  makeLoginSelector,
  makePasswordSelector,
  makeErrorSelector,
  makeIsMasterSelector,
  makeIsShowPasswordSelector,
  makeIsLoadingSelector
};
