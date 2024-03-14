import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from '../../lib/top100films';

export default function AutocompleteDemo() {
    return (
        <Autocomplete
            defaultValue={top100Films[0]}
            disableClearable
            autoComplete
            openOnFocus
            autoSelect
            autoHighlight
            clearOnBlur
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
}
