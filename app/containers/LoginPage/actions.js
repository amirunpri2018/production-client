/*
 *
 * LoginPage actions
 *
 */

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

export function changeLoginAction(login) {
  return {
    type: CHANGE_LOGIN,
    login
  };
}

export function changePasswordAction(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  };
}

export function toggleShowPasswordAction() {
  return {
    type: TOGGLE_SHOW_PASSWORD
  };
}

export function toggleMasterAction() {
  return {
    type: TOGGLE_MASTER
  };
}

export function loginRequestAction() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccessAction(user, token) {
  return {
    type: LOGIN_SUCCESS,
    user,
    token
  };
}

export function loginErrorAction(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

export function loginCancelAction() {
  return {
    type: LOGIN_CANCEL
  };
}
