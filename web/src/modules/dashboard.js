import { getDashboardData as dashboardAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_DASHBOARD_DATA = "GET_DASHBOARD_DATA";
const GET_DASHBOARD_DATA_SUCCESS = "GET_DASHBOARD_DATA_SUCCESS";
const GET_DASHBOARD_DATA_ERROR = "GET_DASHBOARD_DATA_ERROR";

export const getDashboardData = createPromiseThunk(GET_DASHBOARD_DATA, dashboardAPI);

const initialState = {
  dashboard: reducerUtils.initial()
}

export default function dashboardReducer(state = initialState, action){
  switch(action.type){
    case GET_DASHBOARD_DATA:
    case GET_DASHBOARD_DATA_SUCCESS:
    case GET_DASHBOARD_DATA_ERROR:
      return handleAsyncActions(GET_DASHBOARD_DATA, 'dashboard')(state, action);
    default:
      return state;
  }
}