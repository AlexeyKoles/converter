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
            <Box className='converterField' sx={{ padding: 1 }}>
                <Typography sx={{ mb: 1, ml: 1 }} >{props.text}</Typography>
                <Box sx={{ width: 400, height: 200, border: 1, borderColor: 'grey.500', borderRadius: 2 }}>

                    <FormControl fullWidth variant="standard" >
                        <InputLabel sx={{ ml: 2 }} id="demo-select-small">Выберите валюту</InputLabel>
                        <Select
                            value={props.ratesValue}
                            onChange={props.onChangeRates}
                            label="Age"
                        >
                            {props.сurrencies.map((currencies, index) =>
                                <MenuItem key={index} value={currencies.value}>{currencies.name}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <TextField sx={{ mt: 5.5, ml: 2 }}
                        type="number"
                        variant="standard"
                        autoComplete="off"
                        onInput={props.onInputValue}
                        value={props.value}
                    />
                </Box>
            </Box>
        </form>
    )
}

export default ConverterField;
