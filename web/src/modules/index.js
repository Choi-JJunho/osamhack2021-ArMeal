import { combineReducers } from 'redux';
import authReducer from './auth';
import dashboardReducer from './dashboard';
import managementReducer from './management';
import sidedishReducer from './sidedish';
import satisfyReducer from './satisfy';

const rootReducer = combineReducers({
  authReducer,
  dashboardReducer,
  managementReducer,
  sidedishReducer,
  satisfyReducer
});

export default rootReducer;