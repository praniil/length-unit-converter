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

  convertToMeter(): number {
    return this.length * 0.01
  }

  convertToKilometer(): number {
    return this.length * 0.00001
  }

  convertToCentimeter(): number {
    return this.length
  }

  convertToFoot(): number {
    return this.length * 0.0328084
  }

  convertToYard(): number {
    return this.length * 0.01093613
  }
}

const lengthUnit: string[] = [
  "INCH",
  "METER",
  "KILOMETER",
  "CENTIMETER",
  "FEET",
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
  const [secondList, setSecondList] = useState<string>("INCH")

  function handleChangeInitialInfo(event: any) {
    const { name, value } = event.target
    setInitialInfo({
      ...initialInfo,
      [name]: value
    });
  }

  function convertToCM(num: number, fUnit: string): number {
    switch (fUnit) {
      case "INCH":
        num = num * 2.54
        break
      case "METER":
        num = num * 100
        break
      case "KILOMETER":
        num = num * 100000
        break
      case "CENTIMETER":
        num = num
        break
      case "FEET":
        num = num / 0.0328084
        break
      case "YARD":
        num = num / 0.01093613
        break
    }
    return num
  }

  function handleConvertClick() {
    const ansInCM: number = convertToCM(initialInfo.number, initialInfo.firstUnit)
    const convert = new Converter(ansInCM)
    switch (secondList) {
      case "INCH":
        setAnswer(convert.convertToInch())
        break
      case "METER":
        setAnswer(convert.convertToMeter())
        break
      case "KILOMETER":
        setAnswer(convert.convertToKilometer())
        break
      case "CENTIMETER":
        setAnswer(convert.convertToCentimeter())
        break
      case "FEET":
        setAnswer(convert.convertToFoot())
        break
      case "YARD":
        setAnswer(convert.convertToYard())
        break
    }
  }

  function handleChangeSecondList(event: any) {
    console.log(event.target.value)
    setSecondList(event.target.value)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="flex items-center">
          <input type='text' name="number" onChange={handleChangeInitialInfo} placeholder='Enter the number' className="border-2 border-gray-300 rounded-md px-4 py-2 mr-4" />
          <select name="firstUnit" id="firstUnit" value={initialInfo.firstUnit} onChange={handleChangeInitialInfo} className="border-2 border-gray-300 rounded-md px-4 py-2 mr-4">
            {lengthUnit.map((unit, index) => (
              <option value={unit} key={index}> {unit} </option>
            ))}
          </select>
        </div>
        <div className="flex items-center mt-4">
          <span className="mr-2">to</span>
          <select name="secondList" id="secondList" value={secondList} onChange={handleChangeSecondList} className="border-2 border-gray-300 rounded-md px-4 py-2 mr-4">
            {lengthUnit.map((unit, index) => (
              <option value={unit} key={index}> {unit} </option>
            ))}
          </select>
          <button onClick={handleConvertClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">CONVERT</button>
        </div>
        {answer !== null && (
          <div className="mt-4">
            <span className="text-lg font-semibold">Result:</span>
            <span className="text-xl ml-2"><span>{answer}</span>&nbsp;<span>{secondList.toLowerCase()}s</span></span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
