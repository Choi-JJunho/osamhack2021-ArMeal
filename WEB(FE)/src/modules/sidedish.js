import { getAllSidedishData as allSidedishAPI, getSidedishData as sidedishAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_ALL_SIDEDISH_DATA = "GET_ALL_SIDEDISH_DATA";
const GET_ALL_SIDEDISH_DATA_SUCCESS = "GET_ALL_SIDEDISH_DATA_SUCCESS";
const GET_ALL_SIDEDISH_DATA_ERROR = "GET_ALL_SIDEDISH_DATA_ERROR";

const GET_SIDEDISH_DATA = "GET_SIDEDISH_DATA";
const GET_SIDEDISH_DATA_SUCCESS = "GET_SIDEDISH_DATA_SUCCESS";
const GET_SIDEDISH_DATA_ERROR = "GET_SIDEDISH_DATA_ERROR";

export const getAllSidedishData = createPromiseThunk(GET_ALL_SIDEDISH_DATA, allSidedishAPI);
export const getSidedishData = createPromiseThunk(GET_SIDEDISH_DATA, sidedishAPI);

const initialState = {
  all: reducerUtils.initial(),
  spec: reducerUtils.initial()
}

export default function sidedishReducer(state = initialState, action){
  switch(action.type){
    case GET_ALL_SIDEDISH_DATA:
    case GET_ALL_SIDEDISH_DATA_SUCCESS:
    case GET_ALL_SIDEDISH_DATA_ERROR:
      return handleAsyncActions(GET_ALL_SIDEDISH_DATA, 'all')(state, action);
    case GET_SIDEDISH_DATA:
    case GET_SIDEDISH_DATA_SUCCESS:
    case GET_SIDEDISH_DATA_ERROR:
      return handleAsyncActions(GET_SIDEDISH_DATA, 'spec')(state, action);
    default:
      return state;
  }
}