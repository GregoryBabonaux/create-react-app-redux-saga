import React from 'react'
import { renderWithRedux, renderWithReduxWithStateWithRouter } from 'utils/tests.utils';

import List from './index'

const props = { match: { path: '' } };

describe('List', () => {
  it('renders the List Scene and an empty ul', () => {
    const { debug, queryAllByText, container } = renderWithRedux(<List />);
    const header = queryAllByText('Dogs revenge');
    const ul = container.querySelector(`ul`)
    const li = container.querySelector('li');

    expect(header).toHaveLength(1);
    expect(ul).toBeTruthy();
    expect(li).toBeNull();
  });

  it('renders the List Scene with a list of breeds', () => {
    const state = { dog: { dogs : [{ breed: 'Shar-Pei'}] } };
    const { debug, queryAllByText, container } = renderWithReduxWithStateWithRouter(<List match={props.match} />, state);
    const ul = container.querySelector('ul');
    const li = container.querySelector('li');

    expect(ul).toBeTruthy();
    expect(li).toBeTruthy();
  })
})