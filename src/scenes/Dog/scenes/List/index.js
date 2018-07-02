import React from 'react';
import { array, func } from 'prop-types';

import { connect } from 'react-redux';

// redux
import * as dogActions from 'modules/dog/actions';

// components
import { Link } from 'react-router-dom';
import Title from 'components/Title';


class List extends React.PureComponent {
  static propTypes = {
    dogs: array,
    getDogs: func,
    selectBreed: func,
  }

  componentDidMount() {
    const { props: { getDogs } } = this;
    getDogs();
  }

  render() {
    const { props: { match, dogs, selectBreed } } = this;
    return (
      <div>
        <Title red>Dogs revenge</Title>
        <ul>
          {dogs.map((dog, index) => (
            <li onClick={() => selectBreed(dog.breed)} key={index}>
              <Link to={`${match.path}/${dog.breed}`}>{dog.breed.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dogs: state.dog.dogs,
});

const mapDispatchToProps = {
  getDogs: dogActions.getDogs,
  selectBreed: dogActions.selectBreed,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
