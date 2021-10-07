import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'


const Container = styled.div`
  width: 300px;
  height: 70px;
  text-align: right;
  margin-bottom: 10px;
  background-color: #4F5D75;
  border-radius: 10px;
  overflow: auto;
  padding: 16px;
  box-shadow: inset 0 0 10px #000000;
  color: white;
`;

class Screen extends Component {
  render() {
    return <Container>{this.props.value}</Container>;
  }
}
Screen.propTypes = {
  value: PropTypes.element,
}

export default Screen;
