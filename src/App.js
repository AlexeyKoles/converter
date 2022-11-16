import './App.css';
import React, { useState, useEffect } from 'react';
import ConverterField from './components/ConverterField';
import { Button } from "@mui/material"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function App() {

  const [fromRatesValue, setFromRatesValue] = useState("");
  const [toRatesValue, setToRatesValue] = useState("");
  const [stateInputValue, setStateInputValue] = useState();
  const [сurrencies, setCurrencies] = useState([])

  useEffect(() => { fetchCurrencies() }, []);
  async function fetchCurrencies() {
    
    let response = await fetch("https://cdn.cur.su/api/latest.json")
    // API сломался, пытаюсь найти другой
    let currencyObject = await response.json();
    let ratesArr = Object.entries(currencyObject.rates);
    let rates = ratesArr.map((rate) => {
      let objcurriencies = {
        name: 
        rate[0],
        value: rate[1]
      };
      return objcurriencies
    })
    setCurrencies(rates)
  };
  console.log(сurrencies)

  const calculateConvertValue = () =>
    (toRatesValue / fromRatesValue * stateInputValue).toFixed(2);

  function revers() {
    setStateInputValue(calculateConvertValue())
    setToRatesValue(fromRatesValue)
    setFromRatesValue(toRatesValue)
  };

  return (
    
    <div className="App">

      <ConverterField
        text={"У меня есть"}
        сurrencies={сurrencies}
        ratesValue={fromRatesValue}
        onChangeRates={(e) => setFromRatesValue(e.target.value)}
        onInputValue={(e) => setStateInputValue(e.target.value)}
        value={stateInputValue}
      />

      <Button onClick={revers} >
        <CompareArrowsIcon sx={{ width: 50, height: 50 }} />
      </Button>

      <ConverterField
        text={"Я получу"}
        сurrencies={сurrencies}
        ratesValue={toRatesValue}
        value={calculateConvertValue()}
        onChangeRates={(e) => setToRatesValue(e.target.value)}
      />

    </div>
  );
}

export default App;
