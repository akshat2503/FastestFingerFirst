import { Box } from '@mui/material'
import React from 'react'



export default function Caret() {
    return (
        <Box sx={{
            display: 'inline-block',
            backgroundColor: 'white',
            width: '3px',
            height: '1.4rem',
            opacity: '0.8',
            animation: 'caretAnim 1s infinite ease-in-out'
        }}>

        </Box>
    )
}
