import React from 'react'
import { renderWithRedux } from 'utils/tests.utils';

import Auth from './index'

describe('Auth', () => {
  it('renders the Auth', () => {
    const { debug, queryByText } = renderWithRedux(<Auth />)
    const header = queryByText('Please, fill the form bellow')
  })
})