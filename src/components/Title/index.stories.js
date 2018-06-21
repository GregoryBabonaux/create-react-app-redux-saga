import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './index';

storiesOf('Titles', module)
  .add('Title', () => <Title>Hello world</Title>);
