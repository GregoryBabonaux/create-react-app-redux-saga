import React from 'react'
import { render } from 'react-testing-library'
import {createStore} from 'redux'
import {Provider } from 'react-redux'
import rootReducer from 'modules';
import { StaticRouter } from 'react-router'

export function renderWithRedux(
  ui,
  {initialState, store = createStore(rootReducer, initialState)} = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

export function renderWithReduxWithStateWithRouter(
  ui,
  state,
  {store = createStore(rootReducer, state)} = {},
) {
  return {
    ...render(<Provider store={store}>
                <StaticRouter location="/" context={{}}>{ui}</StaticRouter>
              </Provider>
    ),
    store,
  }
}
