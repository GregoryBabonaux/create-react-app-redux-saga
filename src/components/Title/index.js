import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${ props => props.red ? 'red' : 'palevioletred' }
`;

export default Title;
