export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (email) => ({
  type: LOGIN_SUCCESS,
  payload: email,
});

export const logout = () => ({
  type: LOGOUT,
});
