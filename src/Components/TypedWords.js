import { Box, Typography } from '@mui/material'
import React from 'react'
import Caret from './Caret';

export default function TypedWords(props) {
    const typedCharacters = props.userInput.split("");
    return (
        <Box sx={{position: 'absolute', width: '80%'}}>
            {typedCharacters.map((char) => (<Typography sx={{
                color: 'white',
                display: 'inline',
                fontFamily: 'Roboto Mono',
                fontSize: '1.4rem',
                color: 'white',
                opacity: '0.8',
            }}>{char}</Typography>))}
            <Caret />
        </Box>
    )
}
