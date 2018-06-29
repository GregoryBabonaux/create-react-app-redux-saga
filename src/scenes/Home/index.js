import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter/actions';

import { func, bool, number } from 'prop-types';

import Button from 'components/Button';
import Title from 'components/Title';

const Home = ({ count, increment, isIncrementing, incrementAsync, decrement, isDecrementing, changePage }) => (
  <div>
    <Title>Home</Title>
    <p>Count: <span data-cy="counter">{count}</span></p>

    <p>
      <Button onClick={increment} disabled={isIncrementing} data-cy="button-increment">
        Increment
      </Button>
      <Button onClick={incrementAsync} disabled={isIncrementing} data-cy="button-async-increment">
        Increment Async
      </Button>
    </p>

    <p>
      <Button onClick={decrement} disabled={isDecrementing} data-cy="button-decrement">
        Decrement
      </Button>
      <Button onClick={decrementAsync} disabled={isDecrementing} data-cy="button-async-decrement">
        Decrement Async
      </Button>
    </p>

    <p>
      <Button onClick={() => changePage()} data-cy="go-to-about">
        Go to about page via redux
      </Button>
    </p>
  </div>
);

Home.propTypes = {
  count: number,
  increment: func,
  isIncrementing: bool,
  incrementAsync: func,
  decrement: func,
  isDecrementing: bool,
  changePage: func,
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us'),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
