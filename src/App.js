import React, { useState, useEffect } from 'react';
import './App.css';
import ConverterField from './components/ConverterField';
import { Button } from "@mui/material"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function App() {

  const [data, setData] = useState([]);
  const [ratesValue1, setRatesValue1] = useState();
  const [ratesValue2, setRatesValue2] = useState();
  const [text1, setText1] = useState();


  useEffect(() => { fetchData() }, []);
  async function fetchData() {
    let response = await fetch("https://cdn.cur.su/api/latest.json")
    let currencyObject = await response.json();
    setData(currencyObject.rates)
  };


  const convert = (e) => {
    setText1(e.target.value)
  }

  function revers() {


  }



  return (
    <div className="App">

      <ConverterField
        data={data}
        ratesValue={ratesValue1}
        text1={text1}
        onChangeRates={(e) => setRatesValue1(e.target.value)}
        convert={convert}
        value={text1}
      />

      <Button onClick={revers}><CompareArrowsIcon sx={{ width: 50, height: 50 }} /></Button>

      <ConverterField
        data={data}
        ratesValue={ratesValue2}
        value={ratesValue2 / ratesValue1 * text1}
        onChangeRates={(e) => setRatesValue2(e.target.value)}
      />

    </div>
  );
}

export default App;
