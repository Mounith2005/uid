import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  function inputDigit(digit) {
    if (waitingForSecond) {
      setDisplayValue(String(digit));
      setWaitingForSecond(false);
      return;
    }
    setDisplayValue((prev) => (prev === '0' ? String(digit) : prev + String(digit)));
  }

  function inputDecimal() {
    setDisplayValue((prev) => (prev.includes('.') ? prev : prev + '.'));
  }

  function clearAll() {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  function clearEntry() {
    setDisplayValue('0');
  }

  function toggleSign() {
    setDisplayValue((prev) => (prev.startsWith('-') ? prev.slice(1) : prev === '0' ? '0' : '-' + prev));
  }

  function percent() {
    setDisplayValue((prev) => String(parseFloat(prev || '0') / 100));
  }

  function backspace() {
    setDisplayValue((prev) => (prev.length <= 1 || (prev.length === 2 && prev.startsWith('-')) ? '0' : prev.slice(0, -1)));
  }

  function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      let result = currentValue;
      switch (operator) {
        case '+':
          result = currentValue + inputValue; break;
        case '-':
          result = currentValue - inputValue; break;
        case '*':
          result = currentValue * inputValue; break;
        case '/':
          result = inputValue === 0 ? Infinity : currentValue / inputValue; break;
        default:
          break;
      }
      setPreviousValue(result);
      setDisplayValue(String(result));
    }

    setWaitingForSecond(true);
    setOperator(nextOperator);
  }

  function equals() {
    if (operator === null || previousValue === null) return;
    performOperation(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  return (
    <div className="calculator container">
      <h2>Experiment 3: Calculator</h2>
      <div className="calc">
        <div className="calc__display" data-testid="display">{displayValue}</div>
        <button className="calc__btn calc__btn--util" onClick={clearAll}>AC</button>
        <button className="calc__btn calc__btn--util" onClick={clearEntry}>C</button>
        <button className="calc__btn calc__btn--util" onClick={backspace}>DEL</button>
        <button className={`calc__btn calc__btn--op${operator === '/' ? ' is-active' : ''}`} onClick={() => performOperation('/')}>÷</button>

        <button className="calc__btn" onClick={() => inputDigit(7)}>7</button>
        <button className="calc__btn" onClick={() => inputDigit(8)}>8</button>
        <button className="calc__btn" onClick={() => inputDigit(9)}>9</button>
        <button className={`calc__btn calc__btn--op${operator === '*' ? ' is-active' : ''}`} onClick={() => performOperation('*')}>×</button>

        <button className="calc__btn" onClick={() => inputDigit(4)}>4</button>
        <button className="calc__btn" onClick={() => inputDigit(5)}>5</button>
        <button className="calc__btn" onClick={() => inputDigit(6)}>6</button>
        <button className={`calc__btn calc__btn--op${operator === '-' ? ' is-active' : ''}`} onClick={() => performOperation('-')}>−</button>

        <button className="calc__btn" onClick={() => inputDigit(1)}>1</button>
        <button className="calc__btn" onClick={() => inputDigit(2)}>2</button>
        <button className="calc__btn" onClick={() => inputDigit(3)}>3</button>
        <button className={`calc__btn calc__btn--op${operator === '+' ? ' is-active' : ''}`} onClick={() => performOperation('+')}>+</button>

        <button className="calc__btn" onClick={toggleSign}>±</button>
        <button className="calc__btn" onClick={() => inputDigit(0)}>0</button>
        <button className="calc__btn" onClick={inputDecimal}>.</button>
        <button className="calc__btn calc__btn--op" onClick={equals}>=</button>
        <button className="calc__btn calc__btn--util" onClick={percent}>%</button>
      </div>
    </div>
  );
}

export default Calculator;


