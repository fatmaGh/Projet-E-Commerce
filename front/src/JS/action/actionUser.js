import axios from 'axios'
import {
    GET_USER,
    GET_USER_FAILED,
    GET_USER_SUCCESS,
    USER_LOGIN,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS,
    GET_USER_ALL,
    GET_USER_SEARCH,
  }  from '../constants/actionType'


export const registerUser = (newUser) => async (dispatch) => {
    dispatch({ type: USER_REGISTER });
    try {
      const res = await axios.post("/user/register", newUser);
      console.log(res);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_REGISTER_FAILED, payload: error.response.data });
    }
  };


  export const userLogin = (loginCred) => async (dispatch) => {
    dispatch({ type: USER_LOGIN });
  
    try {
      const res = await axios.post("/user/login", loginCred);
  
      console.log(res.data);
  
      localStorage.setItem("token", res.data.token);
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch({ type: USER_LOGIN_FAILED, payload: error.response.data });
    }
  };



  export const getProfile = () => async (dispatch) => {
    dispatch({ type: GET_USER });
  
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
  
      const user = await axios.get("/user/currentPage", config);
      dispatch({ type: GET_USER_SUCCESS, payload: user.data });
    } catch (error) {
      dispatch({ type: GET_USER_FAILED, payload: error.response.data });
    }
  };
  
export const getUsers = () => (dispatch) => {
    axios.get("/user/users")
        .then(res => dispatch({ type: GET_USER_ALL, payload: res.data }))
        .catch(err => console.log(err))
}


export const deleteUser = (id) => (dispatch) => {
    axios.delete(`/user/${id}`)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const searchUser = (fullName) => (dispatch) => {
  axios.get(`/user/${fullName}`)
      .then(res => dispatch({ type: GET_USER_SEARCH, payload: res.data }))
      .catch(err => console.log(err))
}