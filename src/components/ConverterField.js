import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import NativeSelect from '@mui/material/NativeSelect';



const ConverterField = () => {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState(null);
    const [ratesValue, setRatesValue] = useState(0);
    const [ratesValue2, setRatesValue2] = useState(0);
    const [text, setText] = useState(0);
    const [text2, setText2] = useState(0);

    useEffect(() => { fetchData() }, []);
    async function fetchData() {
        let response = await fetch("https://cdn.cur.su/api/latest.json")
        let currencyObject = await response.json();
        setData1(currencyObject)
        setData2(currencyObject)

    };

    function convert(e) {
        e.preventDefault()

        let num = (ratesValue2 / ratesValue) * text;
        setText2(num)
    }
    
        
     

    return (
        <Box>
            <form  >
                <Box sx={{ margin: 25, padding: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-between', alignItems: 'center', }}>
                    <Box>
                        <Typography sx={{ mb: 1 }} >У меня есть</Typography>

                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>

                            <FormControl variant="standard"
                                fullWidth
                                onChange={(e) => setRatesValue(e.target.value)}>
                                <NativeSelect>
                                    {Object.keys(data1.rates).map((value, index) => { return (<option key={index} value={data1.rates[value]}> {value} </option>) })};
                                </NativeSelect>
                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}

                                variant="standard"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                autoComplete="off"
                                


                            />
                            <Typography sx={{ mt: 5, ml: 2 }}>1110р</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", padding: 1 }}><Button   ><CompareArrowsIcon sx={{ width: 50, height: 50, }} /></Button></Box>

                    <Box>
                        <Typography sx={{ mb: 1 }}>Я получу</Typography>
                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>
                            <FormControl
                                variant="standard"
                                fullWidth
                                onChange={(e) => setRatesValue2(e.target.value)}>

                                <NativeSelect>

                                    {Object.keys(data2.rates).map((value, index) => { return (<option key={index} value={data2.rates[value]}> {value} </option>) })}

                                </NativeSelect>


                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}

                                variant="standard"
                                value={text2}
                                onChange={(e) => setText2(e.target.value)}
                            />
                            <Typography sx={{ mt: 5, ml: 2 }}>1110р</Typography>
                        </Box>
                    </Box>
                </Box>
            </form>
        </Box>

    )
}

export default ConverterField;
