import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const ConverterField = (props) => {

    return (

        <form  >
            <Box sx={{ padding: 1 }}>
                <Typography sx={{ mb: 1, ml: 1 }} >У меня есть</Typography>
                <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>

                    <FormControl fullWidth variant="standard" >
                        <InputLabel sx={{ ml: 2 }} id="demo-simple-select-label">Выберите валюту</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.ratesValue}
                            onChange={props.onChangeRates}
                            label="Age"
                        >

                            {Object.keys(props.data).map((value, index) =>
                                <MenuItem key={index} value={props.data[value]}>{value}</MenuItem>)}
                        </Select>

                    </FormControl>

                    <TextField sx={{ mt: 5.5, ml: 2 }}
                        id="n1"
                        type="number"
                        variant="standard"
                        autoComplete="off"
                        onInput={props.convert}
                        value={props.value}


                    />



                    <Typography id="v1" sx={{ mt: 5, ml: 2 }} ></Typography>
                </Box>
            </Box>
        </form>

    )
}

export default ConverterField;
