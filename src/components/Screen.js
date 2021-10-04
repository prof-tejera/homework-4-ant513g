import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 70px;
  text-align: right;
  margin-bottom: 10px;
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}

export default Screen;
