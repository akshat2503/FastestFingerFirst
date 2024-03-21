import React, { useEffect } from 'react'
import GeneratedWords from './GeneratedWords'
import { Box } from '@mui/material'
import TypedWords from './TypedWords'
import { WordGenerator } from '../Utils/WordGenerator'

const words = WordGenerator();

export default function TypingArea() {

    return (
        <Box sx={{ }}>
            {/* Count down Timer */}
            <GeneratedWords words={words} />
            <TypedWords words={words} />
        </Box>
    )
}
