import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



const ConverterField = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [ratesValue1, setRatesValue1] = useState();
    const [ratesValue2, setRatesValue2] = useState();
    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(0);
    const [baseData,setBaseData]=useState([]);
    useEffect(() => { fetchData() }, []);
    async function fetchData() {
        let response = await fetch("https://cdn.cur.su/api/latest.json")
        let currencyObject = await response.json();
        setData1(currencyObject.rates)
        setData2(currencyObject.rates)
        setBaseData(currencyObject.rates)
    };

    console.log(baseData)

    const assignedValueRates1 = (event) => {
        setRatesValue1(event.target.value);
    };

    const assignedValueRates2 = (event) => {
        setRatesValue2(event.target.value);
    };

    const convert = (e) => {
        e.preventDefault();
        
        
        let num = (ratesValue2/ratesValue1)*text1;
        
        setText2(num);
    }
  

    return (
        <Box >
            <form onSubmit={convert}>

                <Box sx={{ margin: 25, padding: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ mb: 1 }} >У меня есть</Typography>
                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>

                            <FormControl fullWidth variant="standard" >
                                <InputLabel id="demo-simple-select-label">Выберите валюту</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ratesValue1 || ""}
                                    label="Age"
                                    onChange={assignedValueRates1}
                                >
                                    {Object.keys(data1).map((value, index) =>
                                        <MenuItem key={index} value={data1[value]}>{value}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}
                                onChange={(e) => setText1(e.target.value)}
                                type="number"
                                variant="standard"
                                value={text1}
                                autoComplete="off"
                            />
                            <Typography sx={{ mt: 5, ml: 2 }}>{ratesValue1}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", padding: 1 }}><Button   ><CompareArrowsIcon sx={{ width: 50, height: 50, }} /></Button></Box>

                    <Box>
                        <Typography sx={{ mb: 1 }}>Я получу</Typography>
                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>
                            <FormControl fullWidth variant="standard" >
                                <InputLabel id="demo-simple-select-label">Выберите валюту</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ratesValue2 || ""}
                                    label="Age"
                                    onChange={assignedValueRates2}>
                                    {Object.keys(data2).map((value, index) =>
                                        <MenuItem key={index} value={data2[value]}>{value}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}
                                onChange={(e) => setText2(e.target.value)}
                                variant="standard"
                                value={text2}
                                type="number"
                                autoComplete="off"
                            />
                            <Typography sx={{ mt: 5, ml: 2 }}>{ratesValue2}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Button type="submit" >+</Button>
            </form>
        </Box>

    )
}

export default ConverterField;
