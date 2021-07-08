import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { data } from './state';
import { statistics } from './statistics';

const createRootReducers = (history: History<unknown>) => combineReducers({
  data,
  statistics,
  router: connectRouter(history),
});

export default createRootReducers;
