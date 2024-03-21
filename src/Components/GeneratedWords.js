import { Box, Typography } from '@mui/material'
import React from 'react'

export default function GeneratedWords(props) {
    return (
        <Box sx={{position: 'absolute'}}>
            {props.words.map((w)=>(<Typography sx={{
                color: 'white',
                display: 'inline',
                fontFamily: 'Roboto Mono',
                fontSize: '1.4rem',
                opacity: '0.3'
            }}>{w} </Typography>))}
        </Box>
    )
}
