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
    }
    )
    console.log(initialInfo.number)
    console.log(typeof (initialInfo.number))
    console.log(initialInfo.firstUnit)
  }

  function convertToCM(): number {
    console.log("in convert to cm")
    console.log(initialInfo.firstUnit)
    switch (initialInfo.firstUnit) {
      case "INCH":
        console.log("in inch")
        setInitialInfo(prevInfo => ({
          ...prevInfo,
          number: initialInfo.number * 2.54
        }))
        console.log(initialInfo.number)
        break
    }
    console.log("should be 2.25", initialInfo.number)
    return initialInfo.number
  }


  function handleConvertClick() {

    const ansInCM: number = convertToCM()
    console.log(ansInCM)
  }
  
  useEffect(() => {
    handleConvertClick()
  }, [])

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
