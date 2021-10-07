import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";
import styled from 'styled-components';


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
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
`;

const OpWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
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
  getNegative= () => {
    if (!this.state.operator) {
      this.setState({ first: `${-this.state.first || ""}` });
    } else {
      this.setState({ second: `${-this.state.second || ""}` });
    }
  };
 

  handleOperatorClick = (operator) => {
    
    if (operator === "=") {
      const first = parseFloat(this.state.first);
      const second = parseFloat(this.state.second);
     
      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      } else if (this.state.operator === "+/-") {
        this.setState({ operator: null, first: first, second: null});
      }
    } else if (operator === "C") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => {
    const e = this.state.second || this.state.first;
    const par = parseFloat(e);
    if (par > 100000000) {
      return par.toExponential(4);
    } else {
      // Was planning to added toPrecision for the large decimal values, 
      // but it also changed the inputs, not the output.
      // Also was going to return par to make sure that only one decimal would show, 
      // but it would not show when you first press it, only after you select next number.
      return e;
    } 
  };
// Was planning to added toPrecision for the large decimal values, 
      // but it also changed the inputs, not the output.
  render() {
    return (
      <><Container>
        <Screen value={this.getScreenValue()} />
        <div style={{ display: "flex", margin: "auto" }}>
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
            <Number value={"."} onClick={this.handleNumberClick} />
          </NumWrapper>
          <OpWrapper>
              <Operator value="+/-" onClick={this.getNegative} />
              <Operator value="C" onClick={this.handleOperatorClick} />
              <Operator value="+" onClick={this.handleOperatorClick} />
              <Operator value="-" onClick={this.handleOperatorClick} />
              <Operator value="/" onClick={this.handleOperatorClick} />
              <Operator value="x" onClick={this.handleOperatorClick} />
              <Operator value="=" onClick={this.handleOperatorClick} />
          </OpWrapper>
        </div>
        </Container>
      </>
    );
  }
}


export default Calculator;
