import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border: none;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: auto;
  padding: 16px;
  margin: 4px;
  height: 50px;
  width: 50px; 
  box-sizing: border-box;
  border-radius: 16px;
  text-align: center;
  box-shadow: inset  ${props => (props.pressed ? '0 0 8px rgba(5, 5, 5, 0.95)' : '0 0 16px #E8E9E9')};
  background-color: ${props => (props.pressed ? '#A2A4A4' : '#BFC0C0')};
`;

class Number extends Component {
  constructor() {
    super();
    this.state = {
      pressed: false,
    };
  }
  
  onMouseDown = () => {
    this.setState({
          pressed: true,
    });
    this.props.onClick(this.props.value);
  }
  onMouseUp = () => {
    this.setState({
          pressed: false,
    });
  }
  render() {
    return (
      <Container
        pressed={this.state.pressed}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      > 
        {this.props.value}
      </Container>
      );
  }
}

Number.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ])
}

export default Number;
