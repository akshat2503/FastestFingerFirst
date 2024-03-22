import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function GeneratedWords(props) {
    const [generatedLetters, setGeneratedLetters] = useState(props.words.split(""));
    // let generatedLetters = ;
    const [userInput, setUserInput] = useState('');
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    useEffect(() => {
        inputRef.current.focus();
    }, [])


    useEffect(() => {
        console.log(userInput);
        setGeneratedLetters(userInput.split(""));
    }, [userInput])

    return (
        <Box sx={{ position: 'absolute', width: '80%' }}>
            <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={handleInputChange}
                // onKeyDown={()=>console.log("Hello")}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    fontSize: '4rem',
                    opacity: 0, // Hide the input field
                    cursor: 'text', // Show cursor when hovering over the input field
                }}
            />
            {generatedLetters.map((letter, index) => (<Typography key={index} sx={{
                color: 'white',
                display: 'inline',
                fontFamily: 'Roboto Mono',
                fontSize: '1.4rem',
                opacity: '0.3'
            }}>{letter}</Typography>))}
        </Box>
    )
}
