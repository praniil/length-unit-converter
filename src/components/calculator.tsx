import React, { useState } from 'react';

const btnValues = [
  ["C", "%", "+/-", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  [".", "0", "Ans", "="],
];

export const Calculator = () => {
  const [screen, setScreen] = useState<string>("");
  const [res, setResult] = useState<number>(0);
  const [prevAns, setPrevAns] = useState<number>(0);
  let ans : number;

  function btnClick(event: string) {
    if (/[0-9, .]/.test(event)) {
      setScreen(prevState => prevState + event);
    }
    else if (["+", "-", "/", "*", "%"].includes(event)) {
      setScreen(prevState => prevState + event);
    }
    else if (event === "=") {
      const operands = screen.split(/[+, -, /, *, %, +/-]/);
      const operators = screen.split(/[0-9, .]/).filter(item => item.trim() !== '');
      const parsedOperand = operands.map(item => parseFloat(item));
      let result: number = parsedOperand[0];
      for (let i = 0; i < operators.length; i++) {
        const A = parsedOperand[i + 1];
        const operator = operators[i];
        switch (operator) {
          case '+':
            result += A;
            break;
          case '-':
            result -= A;
            break;
          case '*':
            result *= A;
            break;
          case '/':
            result /= A;
            break;
          case '%':
            result /= 100; 
            break;
          default:
            throw new Error('Invalid operator: ' + operator);
        }
      }
      ans = result
      setPrevAns(ans)
      setResult(result);
    }
    else if("Ans".includes(event)) {
      console.log("clicked ans")
      setResult(res)
      setScreen(prevAns.toString())
    }
    else if("C".includes(event)) {
      console.log("C")
      setResult(0)
      setScreen("")
    }
    console.log(ans);
  }

  return (
    <div className="w-64 mx-auto my-8 p-4 border border-gray-300 rounded-lg shadow-lg">
      <div className="mb-4 text-2xl font-semibold flex justify-end h-12">
        <div>{screen}</div>
      </div>
      <div className="mb-4 text-xl font-semibold flex justify-end h-8">{res}</div>
      <div className="grid grid-cols-4 gap-2">
        {btnValues.flat().map((btns) => (
          <button
            key={btns}
            onClick={() => btnClick(btns)}
            className="p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {btns}
          </button>
        ))}
      </div>
    </div>
  );
};
