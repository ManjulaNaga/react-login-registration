import { combineReducers,createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';
import registrationReducer from './registrationReducer';

const rootReducer = combineReducers({
  reducer,
  registrationReducer})

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, logger)
);
