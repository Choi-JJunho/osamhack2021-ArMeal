import { getRatioToday as getRatioTodayAPI, addRatingDaily as addRatingDailyAPI } from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_RATIO_TODAY = "GET_RATIO_TODAY";
const GET_RATIO_TODAY_SUCCESS = "GET_RATIO_TODAY_SUCCESS";
const GET_RATIO_TODAY_ERROR = "GET_RATIO_TODAY_ERROR";

const ADD_RAITING_DAILY = "ADD_RAITING_DAILY";
const ADD_RAITING_DAILY_SUCCESS = "ADD_RAITING_DAILY_SUCCESS";
const ADD_RAITING_DAILY_ERROR = "ADD_RAITING_DAILY_ERROR";

export const getRatioToday = createPromiseThunk(GET_RATIO_TODAY, getRatioTodayAPI);
export const addRatingDaily = createPromiseThunk(ADD_RAITING_DAILY, addRatingDailyAPI);

const initialState = {
  todayRatio: reducerUtils.initial([]),
  add: reducerUtils.initial([])
}

export default function satisfyReducer(state = initialState, action){
  switch(action.type){
    case GET_RATIO_TODAY:
    case GET_RATIO_TODAY_SUCCESS:
    case GET_RATIO_TODAY_ERROR:
      return handleAsyncActions(GET_RATIO_TODAY, 'todayRatio')(state, action);
    case ADD_RAITING_DAILY:
    case ADD_RAITING_DAILY_SUCCESS:
    case ADD_RAITING_DAILY_ERROR:
      return handleAsyncActions(ADD_RAITING_DAILY, 'add')(state, action);
    default:
      return state;
  }
}