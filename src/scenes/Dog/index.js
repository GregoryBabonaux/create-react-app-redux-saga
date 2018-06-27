import React from 'react';
import { Switch, Route } from 'react-router-dom';

// scenes
import List from './scenes/List';
import Breed from './scenes/Breed';

class Dog extends React.PureComponent {
  render() {
    const { props: { match} } = this;
    return (
      <Switch>
        <Route path={`${match.path}/:breed`} component={Breed} />
        
        <Route path={`${match.path}`} component={List} />
      </Switch>
    );
  }
}

export default Dog;