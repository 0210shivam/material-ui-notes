import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import AutocompleteDemo from './components/autoComplete';

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
            </Box>
        </ThemeProvider>
    );
}

export default App;
