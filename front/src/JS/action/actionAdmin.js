import axios from 'axios'
import {
    GET_ADMIN_FAILED,
    GET_ADMIN_SUCCESS,
    GET_ADMIN,
    ADMIN_LOGIN,
    ADMIN_LOGIN_FAILED,
    ADMIN_LOGIN_SUCCESS,
  }  from '../constants/actionType'




  export const adminLogin = (loginCred) => async (dispatch) => {
    dispatch({ type: ADMIN_LOGIN });
  
    try {
      const res = await axios.post("/admin/login", loginCred);
  
      console.log(res.data);
  
      localStorage.setItem("token", res.data.token);
  
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch({ type: ADMIN_LOGIN_FAILED, payload: error.response.data });
    }
  };



  export const getProfileAdmin = () => async (dispatch) => {
    dispatch({ type: GET_ADMIN});
  
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
  
      const admin = await axios.get("/admin/currentPage", config);
      dispatch({ type: GET_ADMIN_SUCCESS, payload: admin.data });
    } catch (error) {
      dispatch({ type: GET_ADMIN_FAILED, payload: error.response.data });
    }
  };


