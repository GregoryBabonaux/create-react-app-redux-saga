import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { isNull } from 'lodash';

// redux
import * as actions from 'modules/dog/actions';

// components
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import Title from 'components/Title';

import './styles.css'

class Breed extends React.PureComponent {

  static propTypes = {
    images: array
  }

  state = {
    images: [],
  }

  componentDidMount() {
    const { props: { match, getBreedPics } } = this;
    getBreedPics(match.params.breed);
  }

  componentDidUpdate(prevProps) {
    const { props: { images } } = this;
    if (prevProps.images !== images) {
      this.setState({
        images
      })
    }
  }

  render() {
    const { props: { breed }, state: { images } } = this;

    if (isNull(breed)) {
      return null;
    }

    return (
      <div>
        <Title>Des images de {breed.toUpperCase()}</Title>
        <div>
          <Link to={`/dogs`}>Retour à la liste des races de toutous</Link>
        </div>
        <Carousel>
          {images.map((image, index) => <div key={index}><img src={image} alt={breed} width="300" /></div> )}    
        </Carousel>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  breed: state.dog.breed,
  images: state.dog.images,
});


const mapDispatchToProps = {
  getBreedPics: actions.getBreedPics,
}

export default connect(mapStateToProps, mapDispatchToProps)(Breed);
