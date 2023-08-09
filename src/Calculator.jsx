import { useState } from 'react';
/*
Design and create a basic Calculator component which
takes 2 numbers and the operator provided by the user and
displays the result.
*/

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const total = () => {
    let num1Value = parseFloat(num1);
    let num2Value = parseFloat(num2);
    let total;

    switch (operator) {
      case '+':
        total = num1Value + num2Value;
        break;
      case '-':
        total = num1Value - num2Value;
        break;
      case '*':
        total = num1Value * num2Value;
        break;
      case '/':
        total = num1Value / num2Value;
        break;
      default:
        return null;
    }

    setResult(total);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" placeholder="Enter number 1" value={num1} onChange={handleNum1Change} />
      <input type="number" placeholder="Enter number 2" value={num2} onChange={handleNum2Change} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value=""></option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={total}>Calculate</button>
      <div>
        Result: <span>{result}</span>
      </div>
    </div>
  );
}

export default Calculator
