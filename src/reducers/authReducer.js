import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  isLoggedIn: false,
  email: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        email: null,
      };
    default:
      return state;
  }
};

export default authReducer;