import * as React from 'react';
import { Box } from '@mui/system';

export default function Sample() {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                display: 'inline-block',
            }}
        >
            <Box sx={{ color: 'text.secondary', display: 'inline' }}>Sessions</Box>
            <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                98.3 K
            </Box>
            <Box
                sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                }}
            >
                +18.77%
            </Box>
            <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                vs. last week
            </Box>
        </Box>
    );
}
