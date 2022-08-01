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
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();


    useEffect(() => { fetchData() }, []);
    async function fetchData() {
        let response = await fetch("https://cdn.cur.su/api/latest.json")
        let currencyObject = await response.json();
        setData1(currencyObject.rates)
        setData2(currencyObject.rates)
    };


    const convert = (e) => {
        setText1(e.target.value)
        setText2(ratesValue2 / ratesValue1 * e.target.value)
    };



    function revers() {

        let rev1 = document.getElementById('rev');
    

        if(rev1.id === "rev"){
            let nn1 = document.getElementById('n1').value;
            let nn2 = document.getElementById('n2').value;

            document.getElementById('n1').value=nn2
            document.getElementById('n2').value=nn1
            
        }
       


}



    return (
        <Box >
            <form  >
                <Box sx={{ margin: 25, padding: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-between', alignItems: 'center' }}>
                    <Box >
                        <Typography sx={{ mb: 1, ml: 1 }} >У меня есть</Typography>
                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>

                            <FormControl fullWidth variant="standard" >
                                <InputLabel sx={{ ml: 2 }} id="demo-simple-select-label">Выберите валюту</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ratesValue1 || ""}
                                    label="Age"
                                    onChange={(e) => setRatesValue1(e.target.value)}
                                >
                                    {Object.keys(data1).map((value, index) =>
                                        <MenuItem key={index} value={data1[value]}>{value}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}
                                id="n1"
                                type="number"
                                variant="standard"
                                value={text1}
                                autoComplete="off"
                                onInput={convert}

                            />
                            <Typography id="v1" sx={{ mt: 5, ml: 2 }} >{ratesValue1}</Typography>
                        </Box>
                    </Box>





                    <Box sx={{ display: "flex", padding: 1 }}><Button onClick={revers} id="rev"><CompareArrowsIcon sx={{ width: 50, height: 50, }} /></Button></Box>








                    <Box>
                        <Typography sx={{ mb: 1, ml: 1 }}>Я получу</Typography>
                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>
                            <FormControl fullWidth variant="standard" >
                                <InputLabel sx={{ ml: 2 }} id="demo-simple-select-label">Выберите валюту</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={ratesValue2 || ""}
                                    label="Age"
                                    onChange={(e) => setRatesValue2(e.target.value)}>
                                    {Object.keys(data2).map((value, index) =>
                                        <MenuItem key={index} value={data2[value]}>{value}</MenuItem>)}
                                </Select>
                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}
                                id="n2"
                                type="number"
                                variant="standard"
                                value={text2}
                                autoComplete="off"
                            />
                            <Typography id="v2" sx={{ mt: 5, ml: 2 }}>{ratesValue2}</Typography>
                        </Box>
                    </Box>
                </Box>

            </form>
        </Box>
    )
}

export default ConverterField;
