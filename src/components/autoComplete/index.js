// *AutoComplete Demo //

// *Importing libraries -
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../../lib/top100films';

const AutocompleteDemo = () => {

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
            defaultValue={top100Films[0]}  // sets the default value to the first item in the options array
            disableClearable  // sets the clearable option to false (user can't clear the input)
            autoComplete  // allows the user have the options auto-complete (as the user types)
            openOnFocus  // opens the dropdown when the input is in focus
            autoSelect  // automatically selects the matched option (as user types - if there is a match)
            autoHighlight // the first option is automatically highlighted, so that user can press enter to select it
            clearOnBlur // the input is cleared when the input loses focus

            // *Added id & style //
            id="combo-box-demo"  // sets the id of the input box
            sx={{ width: 300 }}  // sets the style of the input box

            // *Added options & handlers //
            options={top100Films}  // shows the options from the top100Films array
            value={selectedValue}  // sets the value of the input box to the selectedValue (from the options array)
            onChange={(event, value) => handleSelect(value)}  // sets the handler for when an option is selected
            inputValue={inputText}  // sets the value of the input box to the inputText (from the state)
            onInputChange={(event, value) => handleInputChange(event, value)}  // sets the handler for when the input value changes
            renderInput={(params) => <TextField {...params} label="Movie" />}  // sets the label for the input box
        />
    );
};

export default AutocompleteDemo;
