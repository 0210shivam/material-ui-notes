import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../../lib/top100films';

export default function AutocompleteDemo() {

    // *State for the selected value (actual value - from the provided options)
    const [selectedValue, setSelectedValue] = useState(null);

    // *State for the input value (user typed input - may or may not match an option)
    const [inputText, setInputText] = useState('');

    // *Handler for when an option is selected (user selected option)
    const handleSelect = (value) => {
        setSelectedValue(value);
        console.log("User selected option", value);
    };

    // *Handler for when the input value changes (user typed values)
    const handleInputChange = (event, value) => {
        setInputText(value);
        console.log("User typed input", value);
    };

    return (
        <Autocomplete
            // *Added Props //
            defaultValue={top100Films[0]}
            disableClearable
            autoComplete
            openOnFocus
            autoSelect
            autoHighlight
            clearOnBlur

            // *Added id & style //
            id="combo-box-demo"
            sx={{ width: 300 }}

            // *Added options & handlers //
            options={top100Films}
            value={selectedValue}
            onChange={(event, value) => handleSelect(value)}
            inputValue={inputText}
            onInputChange={(event, value) => handleInputChange(event, value)}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
}
