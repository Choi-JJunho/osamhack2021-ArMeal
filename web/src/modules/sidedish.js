import { getAllSidedishData as allSidedishAPI} from "api";
import { createPromiseThunk, reducerUtils, handleAsyncActions } from 'utils/asyncUtils';

const GET_ALL_SIDEDISH_DATA = "GET_ALL_SIDEDISH_DATA";
const GET_ALL_SIDEDISH_DATA_SUCCESS = "GET_ALL_SIDEDISH_DATA_SUCCESS";
const GET_ALL_SIDEDISH_DATA_ERROR = "GET_ALL_SIDEDISH_DATA_ERROR";

export const getAllSidedishData = createPromiseThunk(GET_ALL_SIDEDISH_DATA, allSidedishAPI);

const initialState = {
  sidedish: reducerUtils.initial()
}

export default function sidedishReducer(state = initialState, action){
  switch(action.type){
    case GET_ALL_SIDEDISH_DATA:
    case GET_ALL_SIDEDISH_DATA_SUCCESS:
    case GET_ALL_SIDEDISH_DATA_ERROR:
      return handleAsyncActions(GET_ALL_SIDEDISH_DATA, 'sidedish')(state, action);
    default:
      return state;
  }
}