import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';


const ConverterField = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://api.apilayer.com/fixer/latest', {
                method: "GET",
                headers: {
                    "apikey":"KKqeQjlTyfAH4kHbXuwXQLTidibTFqH6"

                }
            })

            let objCur = await response.json();
            setData(objCur)

        };

        fetchData()
    }, []);

    console.log(data);








    return (
        <Box>
            <Box sx={{ margin: 25, padding: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-between' }}>
                <Box>
                    <Typography>У меня есть</Typography>
                    <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>
                        <FormControl variant="standard" fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField sx={{ mt: 5.5, ml: 2 }}
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />

                        <Typography sx={{ mt: 5, ml: 2 }}>1110р</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", padding: 1, alignItems: 'center', }}><Button   ><CompareArrowsIcon sx={{ width: 50, height: 50, }} /></Button></Box>

                <Box>
                    <Typography>У меня есть</Typography>
                    <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>
                        <FormControl variant="standard" fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField sx={{ mt: 5.5, ml: 2 }}
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />

                        <Typography sx={{ mt: 5, ml: 2 }}>1110р</Typography>
                    </Box>
                </Box>


            </Box>

        </Box>
    )
}

export default ConverterField;