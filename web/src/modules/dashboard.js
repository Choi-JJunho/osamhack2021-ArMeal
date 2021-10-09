import { getTopData as getTopAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_TOP_DATA = "GET_TOP_DATA";
const GET_TOP_DATA_SUCCESS = "GET_TOP_DATA_SUCCESS";
const GET_TOP_DATA_ERROR = "GET_TOP_DATA_ERROR";

export const getTopData = createPromiseThunk(GET_TOP_DATA, getTopAPI);

const initialState = {
  top: reducerUtils.initial([])
}

export default function dashboardReducer(state = initialState, action){
  switch(action.type){
    case GET_TOP_DATA:
    case GET_TOP_DATA_SUCCESS:
    case GET_TOP_DATA_ERROR:
      return handleAsyncActions(GET_TOP_DATA, 'top')(state, action);
    default:
      return state;
  }
}