import React from "react";
import { TemperatureInput } from "./TempInput";
import "./App.css";

function App() {
  const [unit, setUnit] = React.useState("celcius");
  const [value, setValue] = React.useState("");
  let invalidFahrenheitInput :boolean = false;
  let invalidCelciusInput :boolean = false;

  const convertTemperature = (value: string, unit: string) => {
    const valueToConvert = parseFloat(value);
    if(Number.isNaN(valueToConvert) && value.length> 0){
      if(unit === "fahrenheit"){
        invalidFahrenheitInput = true;
      }
      if(unit === "celcius"){
        invalidCelciusInput = true;
      }
     
    }
    if (Number.isNaN(valueToConvert)) {
      
      return "";
    }
    let convertedValue = 0;
    if (unit === "fahrenheit") {
      convertedValue = ((valueToConvert - 32) * 5) / 9;
    } else if (unit === "celcius") {
      convertedValue = (valueToConvert * 9) / 5 + 32;
    }
    return convertedValue.toString();
  };
  const celsiusValue =
    unit === "fahrenheit" ? convertTemperature(value, unit) : value;
  const fahrenheitValue =
    unit === "celcius" ? convertTemperature(value, unit) : value;

  return (
    <div className="App">
      <div className="temperature">
        
     
      <TemperatureInput
        temperatureScale="Fahrenheit"
        temperatureValue={fahrenheitValue}
        onValueChange={(value) => {
          setUnit("fahrenheit");
          console.log(unit, value);
          setValue(value);
        }}
        invalidInput = {invalidFahrenheitInput}
      ></TemperatureInput> </div>
<div className="temperature">


      <TemperatureInput
        temperatureScale="Celsius"
        temperatureValue={celsiusValue}
        onValueChange={(value) => {
          setUnit("celcius");
          console.log(unit, value);
          setValue(value);
        }}
        invalidInput = {invalidCelciusInput}
      ></TemperatureInput></div>
    </div>
  );
}

export default App;
