import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Buttons', module)
  .add('Basic Button', () => <Button>Click me</Button>);
