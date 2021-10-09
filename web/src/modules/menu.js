import { getAllMenuData as allMenuAPI, getMenuData as menuAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_ALL_MENU_DATA = "GET_ALL_MENU_DATA";
const GET_ALL_MENU_DATA_SUCCESS = "GET_ALL_MENU_DATA_SUCCESS";
const GET_ALL_MENU_DATA_ERROR = "GET_ALL_MENU_DATA_ERROR";

const GET_MENU_DATA = "GET_MENU_DATA";
const GET_MENU_DATA_SUCCESS = "GET_MENU_DATA_SUCCESS";
const GET_MENU_DATA_ERROR = "GET_MENU_DATA_ERROR";

export const getAllMenuData = createPromiseThunk(GET_ALL_MENU_DATA, allMenuAPI);
export const getMenuData = createPromiseThunk(GET_MENU_DATA, menuAPI);

const initialState = {
  all: reducerUtils.initial(),
  spec: reducerUtils.initial()
}

export default function menuReducer(state = initialState, action){
  switch(action.type){
    case GET_ALL_MENU_DATA:
    case GET_ALL_MENU_DATA_SUCCESS:
    case GET_ALL_MENU_DATA_ERROR:
      return handleAsyncActions(GET_ALL_MENU_DATA, 'all')(state, action);
    case GET_MENU_DATA:
    case GET_MENU_DATA_SUCCESS:
    case GET_MENU_DATA_ERROR:
      return handleAsyncActions(GET_MENU_DATA, 'spec')(state, action);
    default:
      return state;
  }
}