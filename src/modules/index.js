import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import counter from './counter/';
import auth from './auth/';
import dog from './dog';
import basket from './basket';

export default history =>
  combineReducers({
    counter,
    auth,
    dog,
    basket,
    router: connectRouter(history),
  });
