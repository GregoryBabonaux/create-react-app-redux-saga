import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './modules';

// redux-saga
import createSagaMiddleware from 'redux-saga';
import sagas from 'modules/rootSagas';

// redux-thunk (you probably don't need this)
import thunk from 'redux-thunk';

// redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

// Configure redux-persist
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2, // for two-level deep merge
  blacklist: ['dog', 'counter'], // see also whitelist
};

export const history = createBrowserHistory();

const pReducer = persistReducer(persistConfig, rootReducer(history));

const initialState = {};
const enhancers = [];

const middleware = [thunk, routerMiddleware(history), sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// If you don't need persist, change pReducer by rootReducer
const store = createStore(pReducer, initialState, composedEnhancers);

export default store;
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
