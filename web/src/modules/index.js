import { combineReducers } from 'redux';
import authReducer from './auth';
import dashboardReducer from './dashboard';
import managementReducer from './management';
import sidedishReducer from './sidedish';
import satisfyReducer from './satisfy';
import menuReducer from './menu';

const rootReducer = combineReducers({
  authReducer,
  dashboardReducer,
  managementReducer,
  sidedishReducer,
  satisfyReducer,
  menuReducer
});

export default rootReducer;