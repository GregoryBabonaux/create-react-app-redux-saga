import React from 'react';
import { Button as ButtonAndt } from 'antd';
import { node } from 'prop-types';

const Button = props => (
  <ButtonAndt {...props} />
);

Button.propTypes = {
  children: node,
}

export default Button;
