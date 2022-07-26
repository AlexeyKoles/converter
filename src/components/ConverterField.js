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
    const [rat1, setRat1] = useState();
    const [rat2, setRat2] = useState();

    useEffect(() => { fetchData() }, []);
    async function fetchData() {
        let response = await fetch("https://cdn.cur.su/api/latest.json")
        let currencyObject = await response.json();
        setData1(currencyObject.rates)
        setData2(currencyObject.rates)
    };

    const handleChange1 = (event) => {
        setRat1(event.target.value);
    };
    const handleChange2 = (event) => {
        setRat2(event.target.value);
    };
    return (
        <Box>
            <form  >
                <Box sx={{ margin: 25, padding: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-between', alignItems: 'center', }}>
                    <Box>
                        <Typography sx={{ mb: 1 }} >У меня есть</Typography>

                        <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>

                            <FormControl fullWidth variant="standard" >
                                <InputLabel id="demo-simple-select-label">Выберите валюту</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={rat1}
                                    label="Age"
                                    onChange={handleChange1}>

                                    {Object.keys(data1).map((value, index) =>
                                        <MenuItem key={index} value={value}>{value}</MenuItem>)}

                                </Select>
                            </FormControl>

                            <TextField sx={{ mt: 5.5, ml: 2 }}

                                variant="standard"

                            />
                            <Typography sx={{ mt: 5, ml: 2 }}>1110р</Typography>
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
                                    value={rat2}
                                    label="Age"
                                    onChange={handleChange2}>

                                    {Object.keys(data2).map((value, index) =>
                                        <MenuItem key={index} value={value}>{value}</MenuItem>)}

                                </Select>
                            </FormControl>


                            <TextField sx={{ mt: 5.5, ml: 2 }}

                                variant="standard"

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
