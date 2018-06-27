import React from 'react'
import { renderWithRedux } from 'utils/tests.utils';

import List from './index'

describe('List', () => {
  it('renders the List Scene and an empty ul', () => {
    const { debug, queryAllByText, container } = renderWithRedux(<List />);
    const header = queryAllByText('Dogs revenge');
    expect(header).toHaveLength(1);

    const ul = container.querySelector(`ul`)
    expect(ul).toBeTruthy();

    const li = container.querySelector('li');
    expect(li).toBeNull();
  });

  it('renders the List Scene with a list of breeds', () => {
    const { debug, queryAllByText, container } = renderWithRedux(<List />);
    const ul = container.querySelector(`ul`)
    expect(ul).toBeTruthy();
  })
})