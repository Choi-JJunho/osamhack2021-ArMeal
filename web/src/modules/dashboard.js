import { getTopData as getTopAPI , getAverage as getAverAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_TOP_DATA = "GET_TOP_DATA";
const GET_TOP_DATA_SUCCESS = "GET_TOP_DATA_SUCCESS";
const GET_TOP_DATA_ERROR = "GET_TOP_DATA_ERROR";

const GET_AVERAGE = "GET_AVERAGE";
const GET_AVERAGE_SUCCESS = "GET_AVERAGE_SUCCESS";
const GET_AVERAGE_ERROR = "GET_AVERAGE_ERROR";

export const getTopData = createPromiseThunk(GET_TOP_DATA, getTopAPI);
export const getAverage = createPromiseThunk(GET_AVERAGE, getAverAPI);

const initialState = {
  top: reducerUtils.initial([]),
  average: reducerUtils.initial(),
}

export default function dashboardReducer(state = initialState, action){
  switch(action.type){
    case GET_TOP_DATA:
    case GET_TOP_DATA_SUCCESS:
    case GET_TOP_DATA_ERROR:
      return handleAsyncActions(GET_TOP_DATA, 'top')(state, action);
    case GET_AVERAGE:
    case GET_AVERAGE_SUCCESS:
    case GET_AVERAGE_ERROR:
      return handleAsyncActions(GET_AVERAGE, 'average')(state, action);

    default:
      return state;
  }
}