import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
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
  box-shadow: inset  ${props => (props.pressed ? '0 0 8px rgba(5, 5, 5, 0.95)' : '0 0 16px #F06124')};
  background-color: ${props => (props.pressed ? '#F06124' : '#EF8354')};
  
`;

class Operator extends Component {
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
      // const { pressed, backgroundColor} = this.state;
      
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

Operator.propTypes = {
  value: PropTypes.node,
}
export default Operator;
