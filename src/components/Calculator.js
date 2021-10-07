import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";
import styled from 'styled-components';
import PropTypes from 'prop-types'



const Container = styled.div`
  padding: 24px 20px;
  border-radius: 16px;
  width: min-content;
  overflow: auto;
  background-color: #2D3142;
  box-shadow: 4px 4px 16px 0 rgba(0, 0, 20, 0.25);
`;

const NumWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const OpWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      } else if (this.state.operator === ".") {
        this.setState({ operator: null, first: first . second, second: null });
      } else if (this.state.operator === "+/-") {
        this.setState({ operator: null, first: -first, second: null });
      }
    } else if (operator === "clear") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <><Container>
        <Screen value={this.getScreenValue()} />
        <div style={{ display: "flex" }}>
          <NumWrapper>
            {/* Changed the Order of the numbers */}
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={0} onClick={this.handleNumberClick} />
          </NumWrapper>
          <div style={{ paddingLeft: 10 }}>
            <OpWrapper>
              <Operator value="+/-" onClick={this.handleOperatorClick} />
              <Operator value="clear" onClick={this.handleOperatorClick} />
              <Operator value="+" onClick={this.handleOperatorClick} />
              <Operator value="-" onClick={this.handleOperatorClick} />
              <Operator value="/" onClick={this.handleOperatorClick} />
              <Operator value="x" onClick={this.handleOperatorClick} />
              <Operator value="." onClick={this.handleOperatorClick} />
              <Operator value="=" onClick={this.handleOperatorClick} />
            </OpWrapper>
          </div>
        </div>
        </Container>
      </>
    );
  }
}

export default Calculator;
