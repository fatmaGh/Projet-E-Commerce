import {
    GET_ADMIN,
    GET_ADMIN_FAILED,
    GET_ADMIN_SUCCESS,
    ADMIN_LOGIN,
    ADMIN_LOGIN_FAILED,
    ADMIN_LOGIN_SUCCESS,
  } from "../constants/actionType";
  
  const initialState = {
    loading: false,
    isAuth: false,
    admin: {},
    errors:{},
  };
  
  const reducerAdmin = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADMIN_LOGIN:
      case GET_ADMIN:
        return {
          ...state,
          loading: true,
          
        };
      case GET_ADMIN_SUCCESS:
        return {
          ...state,
          loading: false,
          admin: payload,
          isAuth: true,
        };
  
      case ADMIN_LOGIN_FAILED:
      case GET_ADMIN_FAILED:
        return {
          ...state,
          loading: false,
          errors: payload,
          isAuth: false,
        };
  
      case ADMIN_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          token: payload.token,
          isAuth: true,
        };
  
        default: return state
    }
  };


export default reducerAdmin;
  