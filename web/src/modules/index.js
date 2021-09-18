import { combineReducers } from 'redux';
import authReducer from './auth';
import dashboardReducer from './dashboard';

const rootReducer = combineReducers({
  authReducer,
  dashboardReducer
});

export default rootReducer;