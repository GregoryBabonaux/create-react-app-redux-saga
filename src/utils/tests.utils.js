import React from 'react'
import { render } from 'react-testing-library'
import {createStore} from 'redux'
import {Provider } from 'react-redux'
import rootReducer from 'modules';

export function renderWithRedux(
  ui,
  {initialState, store = createStore(rootReducer, initialState)} = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}
