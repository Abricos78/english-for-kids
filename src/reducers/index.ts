import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import categories from './categories';
import { loginState } from './login';
import { data } from './state';
import statistics from './statistics';
import words from './words';

const createRootReducers = (history: History<unknown>) => combineReducers({
  data,
  words,
  categories,
  statistics,
  loginState,
  router: connectRouter(history),
});
export default createRootReducers;
