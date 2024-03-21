import { Box, Typography } from '@mui/material'
import React from 'react'

export default function TypedWords(props) {
    return (
        <Box sx={{position: 'absolute'}}>
            {props.words.map((w) => (<Typography sx={{
                color: 'white',
                display: 'inline',
                fontFamily: 'Roboto Mono',
                fontSize: '1.4rem',
                color: 'white',
                opacity: '0.8'
            }}>{w} </Typography>))}
        </Box>
    )
}
