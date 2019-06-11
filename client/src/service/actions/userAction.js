import {
    ADD_USER,
    GET_USERS,
    DELETE_USER,
    LOGIN_USER,
    LOGOUT_USER,
    ERRORS
  } from './ActionTypes';
  
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {setAuthToken} from '../../helpers/Auth';

// add user
export const addUser = userData => dispatch => {
  axios.post('http://localhost:3001/user/register', userData)
    .then(res =>
      dispatch({
        type: ADD_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};

// get all users
export const getUsers = () => dispatch => {
  axios.get('/user/')
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null
      })
    );
};

// set user in state
export const setUser = userData => {
    return {
      type: LOGIN_USER,
      payload: userData
    }
  }  

// delete user
export const deleteUser = userId => dispatch => {
  axios.delete(`/user/${userId}`)
    .then(res =>
      dispatch({
        type: DELETE_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: null
      })
    );
};

// login
export const loginUser = userData => dispatch => {
    axios.post('http://localhost:3001/user/login', userData)
      .then(res =>{
        let token = res.data.token
        localStorage.setItem('jwtToken', token)
        setAuthToken(token)
        let dUser = jwtDecode(token)
        dispatch(setUser(dUser))
      })
      .catch(err => 
        dispatch({
          type:ERRORS,
          payload: err.response.data
        })
      );
  };
  
// logout
export const logoutUser = () => dispatch => {
  setAuthToken(false)
  localStorage.removeItem('jwtToken');
  dispatch({
    type: LOGOUT_USER
  })
};