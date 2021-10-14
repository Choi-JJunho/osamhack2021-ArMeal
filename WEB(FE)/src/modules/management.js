import { getManagementData as managementAPI, getMonthData as getMonthAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_MANAGEMENT_DATA = "GET_MANAGEMENT_DATA";
const GET_MANAGEMENT_DATA_SUCCESS = "GET_MANAGEMENT_DATA_SUCCESS";
const GET_MANAGEMENT_DATA_ERROR = "GET_MANAGEMENT_DATA_ERROR";

const GET_MONTH_DATA = "GET_MONTH_DATA";
const GET_MONTH_DATA_SUCCESS = "GET_MONTH_DATA_SUCCESS";
const GET_MONTH_DATA_ERROR = "GET_MONTH_DATA_ERROR";

export const getManagementData = createPromiseThunk(GET_MANAGEMENT_DATA, managementAPI);
export const getMonthData = createPromiseThunk(GET_MONTH_DATA, getMonthAPI)

const initialState = {
  allData: reducerUtils.initial([]),
  month: reducerUtils.initial([]),
}

export default function managementReducer(state = initialState, action){
  switch(action.type){
    case GET_MANAGEMENT_DATA:
    case GET_MANAGEMENT_DATA_SUCCESS:
    case GET_MANAGEMENT_DATA_ERROR:
      return handleAsyncActions(GET_MANAGEMENT_DATA, 'allData')(state, action);
    case GET_MONTH_DATA:
    case GET_MONTH_DATA_SUCCESS:
    case GET_MONTH_DATA_ERROR:
      return handleAsyncActions(GET_MONTH_DATA, 'month')(state, action);
    default:
      return state;
  }
}