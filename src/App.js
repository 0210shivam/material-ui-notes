import React from 'react';
import Sample from './components/Sample';
import { Box, ThemeProvider } from '@mui/system';
import { theme } from './theme';
import Sample2 from './components/Sample2';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: 'background.poster',
                    minHeight: '100vh',
                    flexDirection: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Sample />
                <Sample2 />
            </Box>
        </ThemeProvider>
    );
}

export default App;
