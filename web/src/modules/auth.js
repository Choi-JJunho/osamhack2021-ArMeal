import { login as loginAPI, signup as signupAPI } from "api";
import { createPromiseThunk } from 'utils/asyncUtils';

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const SIGNUP = "SIGNUP";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_ERROR = "SIGNUP_ERROR";

export const login = createPromiseThunk(LOGIN, loginAPI);
export const signup = createPromiseThunk(SIGNUP, signupAPI);

const initialState = {
  loading: null,
  error: null,
  data: null,
  isLoggedIn: false,
}

export default function authReducer(state = initialState, action){
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        data: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SIGNUP:
      return {
        ...state,
        loading: true,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}