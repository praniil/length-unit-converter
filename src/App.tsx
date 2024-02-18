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
    return this.length * (25 / 64)
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

  convertToDecameter(): number {
    return this.length * 0.001
  }

  convertToMillimeter(): number {
    return this.length * 10
  }

  convertToDecimeter(): number {
    return this.length * 0.1
  }

  convertToMicrometer(): number {
    return this.length * 10000
  }

  convertToNanometer(): number {
    return this.length * 10000000
  }

  convertToPicometer(): number {
    return this.length * 10000000000
  }

  convertToHectormeter(): number {
    return this.length * 0.0001
  }

  convertToChains(): number {
    return this.length * 0.000497097
  }
}

const lengthUnit: string[] = [
  "INCH",
  "METER",
  "KILOMETER",
  "CENTIMETER",
  "FEET",
  "YARD",
  "DECAMETER",
  "MILLIMETER",
  "DECIMETER",
  "MICROMETER",
  "NANOMETER",
  "PICOMETER",
  "HECTOMETER",
  "CHAINS"
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
  const [convertClicked, setConvertClicked] = useState<boolean>(false)
  function handleChangeInitialInfo(event: any) {
    setConvertClicked(false)
    setAnswer(null)
    const { name, value } = event.target
    setInitialInfo({
      ...initialInfo,
      [name]: value
    });
  }

  function convertToCM(num: number, fUnit: string): number {
    switch (fUnit) {
      case "INCH":
        num = num * 1 / (25 / 64)
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
      case "DECAMETER":
        num = num * 1000
        break
      case "MILLIMETER":
        num = num * 0.1
        break
      case "DECIMETER":
        num = num * 10
        break
      case "MICROMETER":
        num = num * 0.0001
        break
      case "NANOMETER":
        num = num * 0.0000001
        break
      case "PICOMETER":
        num = num * 0.0000000001
        break
      case "HECTOMETER":
        num = num * 10000
        break
      case "CHAINS":
        num = num * (1 / 0.000497097)
        break
    }
    return num
  }

  function handleConvertClick() {
    setConvertClicked(true)
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
      case "DECAMETER":
        setAnswer(convert.convertToDecameter())
        break
      case "MILLIMETER":
        setAnswer(convert.convertToMillimeter())
        break
      case "DECIMETER":
        setAnswer(convert.convertToDecimeter())
        break
      case "MICROMETER":
        setAnswer(convert.convertToMicrometer())
        break
      case "NANOMETER":
        setAnswer(convert.convertToNanometer())
        break
      case "PICOMETER":
        setAnswer(convert.convertToPicometer())
        break
      case "HECTOMETER":
        setAnswer(convert.convertToHectormeter())
        break
      case "CHAINS":
        setAnswer(convert.convertToChains())
        break
    }
  }

  function handleChangeSecondList(event: any) {
    setConvertClicked(false)
    setAnswer(null)
    console.log(event.target.value)
    setSecondList(event.target.value)
  }
  return (
    <div className="dark bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <input
            type='text'
            name="number"
            onChange={handleChangeInitialInfo}
            placeholder='Enter the number'
            className="dark:bg-gray-800 border-2 border-gray-600 dark:border-gray-500 rounded-md px-4 py-2 mr-4 focus:outline-none focus:border-blue-500 text-white"
          />
          <select
            name="firstUnit"
            id="firstUnit"
            value={initialInfo.firstUnit}
            onChange={handleChangeInitialInfo}
            className="dark:bg-gray-800 border-2 border-gray-600 dark:border-gray-500 rounded-md px-4 py-2 mr-4 focus:outline-none focus:border-blue-500 text-white"
          >
            {lengthUnit.map((unit, index) => (
              <option
                key={index}
                value={unit}
              >
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center mt-4">
          <span className="mr-2">to</span>
          <select
            name="secondList"
            id="secondList"
            value={secondList}
            onChange={handleChangeSecondList}
            className="dark:bg-gray-800 border-2 border-gray-600 dark:border-gray-500 rounded-md px-4 py-2 mr-4 focus:outline-none focus:border-blue-500 text-white"
          >
            {lengthUnit.map((unit, index) => (
              <option
                key={index}
                value={unit}
              >
                {unit}
              </option>
            ))}
          </select>
          <button
            onClick={handleConvertClick}
            className="dark:bg-gray-800 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            CONVERT
          </button>
        </div>
        {answer !== null && (
          <div className="mt-4">
            <span className="text-lg font-semibold">Result:</span>
            <span className="text-xl ml-2">
              <span>{answer}</span>&nbsp;
              {convertClicked ? (
                <span>{secondList.toLowerCase()}s</span>
              ) : (
                <span></span>
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
  


}

export default App;
