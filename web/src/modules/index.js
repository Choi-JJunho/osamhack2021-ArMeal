import { combineReducers } from 'redux';
import authReducer from './auth';
import dashboardReducer from './dashboard';
import managementReducer from './management';

const rootReducer = combineReducers({
  authReducer,
  dashboardReducer,
  managementReducer
});

export default rootReducer;