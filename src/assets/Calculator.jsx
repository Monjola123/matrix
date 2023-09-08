import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false,
    };


    this.inputDigit = this.inputDigit.bind(this);
    this.inputDecimal = this.inputDecimal.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.calculateSquareRoot = this.calculateSquareRoot.bind(this);
    this.calculatePercentage = this.calculatePercentage.bind(this);
  }

  inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForSecondOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  }

  inputDecimal() {
    const { displayValue, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand) {
      this.setState({
        displayValue: '0.',
        waitingForSecondOperand: false,
      });
    } else {
      if (displayValue.indexOf('.') === -1) {
        this.setState({
          displayValue: displayValue + '.',
        });
      }
    }
  }

  clearInput() {
    this.setState({
      displayValue: '0',
      firstOperand: null,
      operator: null,
      waitingForSecondOperand: false,
    });
  }

  setOperator(nextOperator) {
    const { displayValue, firstOperand, operator } = this.state;

    if (firstOperand === null) {
      this.setState({
        firstOperand: parseFloat(displayValue),
        operator: nextOperator,
        waitingForSecondOperand: true,
      });
    } else {
      const result = this.calculate();
      this.setState({
        displayValue: String(result),
        firstOperand: result,
        operator: nextOperator,
        waitingForSecondOperand: true,
      });
    }
  }

  calculate() {
    const { displayValue, firstOperand, operator } = this.state;
    const secondOperand = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === 'x') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      if (secondOperand === 0) {
        alert('Cannot divide by zero');
        return 0;
      }
      return firstOperand / secondOperand;
    }

    return secondOperand;
  }

  calculateSquareRoot() {
    const { displayValue } = this.state;
    const result = Math.sqrt(parseFloat(displayValue));
    this.setState({
      displayValue: String(result),
    });
  }

  calculatePercentage() {
    const { displayValue } = this.state;
    const result = (parseFloat(displayValue) / 100).toFixed(2);
    this.setState({
      displayValue: String(result),
    });
  }

  handleEqual() {
    if (this.state.operator) {
      this.setState({
        displayValue: this.calculate(),
        firstOperand: null,
        operator: null,
        waitingForSecondOperand: false,
      });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display displayValue={this.state.displayValue} />
        <Keypad
          inputDigit={this.inputDigit}
          inputDecimal={this.inputDecimal}
          clearInput={this.clearInput}
          setOperator={this.setOperator}
          handleEqual={this.handleEqual}
          calculateSquareRoot={this.calculateSquareRoot}
          calculatePercentage={this.calculatePercentage}
        />
      </div>
    );
  }
}

export default Calculator;
