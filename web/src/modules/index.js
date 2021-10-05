import { combineReducers } from 'redux';
import authReducer from './auth';
import dashboardReducer from './dashboard';
import managementReducer from './management';
import sidedishReducer from './sidedish';

const rootReducer = combineReducers({
  authReducer,
  dashboardReducer,
  managementReducer,
  sidedishReducer
});

export default rootReducer;