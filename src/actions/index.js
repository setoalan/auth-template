import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3001';

export function signupUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/users/signup`, { email, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch((response) => {
        dispatch(authError('Bad Signup Info'));
      });
  };
}

export function signinUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/users/signin`, { email, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Bad Signin Info'));
      });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
