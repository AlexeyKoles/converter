import React, { useState, useEffect } from 'react';
import './App.css';
import ConverterField from './components/ConverterField';
import { Button } from "@mui/material"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function App() {

  const [data, setData] = useState([]);
  const [fromRatesValue, setFromRatesValue] = useState("");
  const [toRatesValue, setToRatesValue] = useState("");
  const [stateInputValue, setStateInputValue] = useState();
  const [listNameCurrencies, setListNameCurrencies] = useState([])

  useEffect(() => { fetchData() }, []);
  async function fetchData() {
    let response = await fetch("https://cdn.cur.su/api/latest.json")
    let currencyObject = await response.json();
    setData(currencyObject.rates)
    setListNameCurrencies(Object.keys(currencyObject.rates))
  };

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
        listNameCurrencies={listNameCurrencies}
        data={data}
        ratesValue={fromRatesValue}
        onChangeRates={(e) => setFromRatesValue(e.target.value)}
        onInputValue={(e) => setStateInputValue(e.target.value)}
        value={stateInputValue}
      />

      <Button onClick={revers} >
        <CompareArrowsIcon sx={{ width: 50, height: 50 }} />
      </Button>

      <ConverterField
        listNameCurrencies={listNameCurrencies}
        data={data}
        ratesValue={toRatesValue}
        value={calculateConvertValue()}
        onChangeRates={(e) => setToRatesValue(e.target.value)}
      />

    </div>
  );
}

export default App;
