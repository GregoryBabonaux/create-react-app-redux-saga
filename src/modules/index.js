import { combineReducers } from 'redux';
import counter from './counter/';
import auth from './auth/';
import dog from './dog';
import basket from './basket';

export default combineReducers({
  counter,
  auth,
  dog,
  basket,
});
