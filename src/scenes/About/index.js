import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Title from 'components/Title';

import Me from './scenes/Me';

const About = props => {
  return (
    <div>
      <Title>About Page</Title>
      <p>C'est la page About</p>
      <Link to="/about-us/me">Grégory</Link>
      <Switch>
        <Route exact path={`${props.match.path}/me`} component={Me} />
      </Switch>
    </div>
  );
};

export default About;
