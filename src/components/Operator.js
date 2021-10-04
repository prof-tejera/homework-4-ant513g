import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
`;

class Operator extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Operator;
