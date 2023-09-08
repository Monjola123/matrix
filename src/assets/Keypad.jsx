import React from 'react';

const Keypad = (props) => {
  return (
    <div className="buttons">
      <div className="row">
        <button className='but' onClick={() => props.inputDigit(7)}>7</button>
        <button className='but' onClick={() => props.inputDigit(8)}>8</button>
        <button className='but' onClick={() => props.inputDigit(9)}>9</button>
        <button className='buto' onClick={() => props.setOperator('+')}>+</button>
        <button className='buto' onClick={() => props.setOperator('-')}>-</button>
      </div>
      <div className="row">
        <button className='but' onClick={() => props.inputDigit(4)}>4</button>
        <button className='but' onClick={() => props.inputDigit(5)}>5</button>
        <button className='but' onClick={() => props.inputDigit(6)}>6</button>
        <button className='buto' onClick={() => props.setOperator('x')}>x</button>
        <button className='buto' onClick={() => props.setOperator('/')}>/</button>
      </div>
      <div className="row">
        <button className='but' onClick={() => props.inputDigit(1)}>1</button>
        <button className='but' onClick={() => props.inputDigit(2)}>2</button>
        <button className='but' onClick={() => props.inputDigit(3)}>3</button>
        <button className='buto' onClick={props.calculateSquareRoot}>√</button>
        <button className='buto' onClick={props.calculatePercentage}>%</button>
      </div>
      <div className="row">
        <button className='but' onClick={() => props.inputDigit(0)}>0</button>
        <button className='but' onClick={props.inputDecimal}>.</button>
        <button className='but dope' onClick={props.clearInput}>AC</button>
        <button className='butt woo' onClick={props.handleEqual}>=</button>
      </div>
      <div className="row">
      </div>
    </div>
  );
};

export default Keypad;
