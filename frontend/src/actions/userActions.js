import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL
} from "../constants/userConstants";

import { sampleUser } from "../temp";

const API_URL = process.env.REACT_APP_API_URL + "";

const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  dispatch({ type: USER_UPDATE_REQUEST, payload: { userId, name, email, password } });
  try {
    const { data } = await Axios.put(API_URL + "/users/" + userId,
      { name, email, password }, {
      headers: {
        Authorization: userInfo.token
      }
    });
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set('userToken', JSON.stringify(data.token));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
  }
}

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = { data: { data: sampleUser, success: true } }
    // await Axios.post(API_URL + "/users/signin", { email, password });
    if (data.success) {
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
      Cookie.set('userToken', JSON.stringify(data.data.token));
    } else {
      dispatch({ type: USER_SIGNIN_FAIL, payload: data.error });
    }

  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post(API_URL + "/users/register", { name, email, password });
    if (data.success) {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data.data });
      Cookie.set('userToken', JSON.stringify(data.data.token));
    } else {
      dispatch({ type: USER_REGISTER_FAIL, payload: data.error });
    }
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => (dispatch) => {
  Cookie.remove("userToken");
  dispatch({ type: USER_LOGOUT })
}
export { signin, register, logout, update };