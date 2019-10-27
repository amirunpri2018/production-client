/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import {
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  TOGGLE_SHOW_PASSWORD,
  TOGGLE_MASTER,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_CANCEL
} from './constants';

export const initialState = {
  login: '',
  password: '',
  error: '',
  isMaster: false,
  isLoading: false,
  isShowPassword: false
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      draft.login = parseInt(action.login, 10);
      draft.error = '';
      break;
    case CHANGE_PASSWORD:
      draft.password = action.password;
      draft.error = '';
      break;
    case TOGGLE_MASTER:
      draft.isMaster = !draft.isMaster;
      break;
    case TOGGLE_SHOW_PASSWORD:
      draft.isShowPassword = !draft.isShowPassword;
      break;
    case LOGIN_REQUEST:
      draft.isLoading = true;
      draft.error = '';
      break;
    case LOGIN_SUCCESS | LOGIN_CANCEL:
      draft.isLoading = false;
      draft.login = initialState.login;
      draft.password = initialState.password;
      draft.error = initialState.error;
      draft.isMaster = initialState.isMaster;
      draft.isShowPassword = initialState.isShowPassword;
      break;
    case LOGIN_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default loginPageReducer;
