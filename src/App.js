// *App.js --> Responsible for rendering the entire application.

// *Importing libraries -
import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import AutocompleteDemo from './components/autoComplete';
import MultipleAutocomplete from './components/autoComplete/multiple';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    minHeight: '100vh',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    backgroundColor: 'background.poster'
                }}
            >
                <AutocompleteDemo />
                <MultipleAutocomplete />
            </Box>
        </ThemeProvider>
    );
}

export default App;
