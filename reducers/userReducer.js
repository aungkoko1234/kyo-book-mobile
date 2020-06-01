import {LOGIN_FAIL, LOGIN_SUCCESS} from '../constants';
const initialState = {
  user: {},
  jwtToken: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        jwtToken: action.token,
      };
    default:
      return state;
  }
};
export default userReducer;
