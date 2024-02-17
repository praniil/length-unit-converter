import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class Converter {
  length: number
  constructor(length: number) {
    this.length = length
  }
  convertToInch(): number {
    console.log(this.length)
    // if (this.length == null) {
    //   return 0
    // }
    return this.length * 0.393701
  }
}

const lengthUnit: string[] = [
  "INCH",
  "METER",
  "KILOMETER",
  "CENTIMETER",
  "FOOT",
  "YARD",
]

function App() {
  interface initialInfo {
    number: number;
    firstUnit: string
  }

  const [initialInfo, setInitialInfo] = useState<initialInfo>(
    {
      number: 0,
      firstUnit: "INCH"
    }
  )
  const [answer, setAnswer] = useState<number | null>(null)

  function handleChangeInitialInfo(event: any) {
    const { name, value } = event.target
    setInitialInfo({
      ...initialInfo,
      [name]: value
    });
    handleConvertClick();
  }

  function convertToCM(num: number, fUnit: string): number {
    switch (fUnit) {
      case "INCH":
        num = num * 2.54
        break
    }
    return num
  }

  function handleConvertClick() {
    const ansInCM: number = convertToCM(initialInfo.number, initialInfo.firstUnit)
    const convert = new Converter(ansInCM)
    setAnswer(convert.convertToInch())
  }

  return (
    <>
      <div>
        <input type='text' name="number" onChange={handleChangeInitialInfo} placeholder='Enter the number' />
        <select name="firstUnit" id="firstUnit" value={initialInfo.firstUnit} onChange={handleChangeInitialInfo}>
          {lengthUnit.map((unit, index) => (
            <option value={unit} key={index}> {unit} </option>
          ))}
        </select>
      </div>
      <div>
        <span>to</span>
      </div>
      <div>
        <div>{answer}</div>
      </div>
      <button onClick={handleConvertClick}>CONVERT</button>
    </>
  );
}

export default App;
