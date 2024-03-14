// *Multiselect Autocomplete Component Demo  //

// *Importing Libraries -
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { sampleData } from '../../lib/sampleData';

function MultipleAutocomplete() {
    // *State to keep track of selected values
    const [selectedValues, setSelectedValues] = useState([]);

    return (
        <Autocomplete
            multiple  // *Enable multiple select
            options={sampleData}  // Options to display in the dropdown
            value={selectedValues}  // Currently selected values

            // *Handlers //
            getOptionLabel={(option) => option.label}  // *Function to extract label from options
            onChange={(event, newValue) => {
                setSelectedValues(newValue);  // Update selected values when user makes a selection
                console.log('Selected values:', newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Select Multiple Values"
                />
            )}
        />
    );
}

export default MultipleAutocomplete;
