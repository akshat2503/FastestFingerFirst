import { Avatar, Box, Divider, Stack, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TypingArea from './TypingArea';

export default function Hero() {
    return (
        <Box sx={{ backgroundColor: '#323437', width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80%', height: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ width: '100%', height: '8vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Roboto Mono',
                        fontSize: '2rem',
                        fontWeight: '500',
                        opacity: '0.7',
                        letterSpacing: '0px'
                    }}>☝️fastestfingerfirst</Typography>
                    <Avatar></Avatar>
                </Box>
                <Box sx={{ m: 1, color: 'white', fontFamily: 'Roboto Mono', fontSize: '0.8rem', backgroundColor: '#2c2e31', borderRadius: '7px' }}>
                    <Stack direction="row" spacing={3} variant="middle" sx={{ py: 1.5, px: 3 }} >
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}><AccessTimeFilledIcon sx={{ width: '18px', mr: 1 }} /> time</Box>
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}><HdrAutoIcon sx={{ width: '18px', mr: 1 }} /> words</Box>
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}><FormatQuoteIcon sx={{ width: '18px', mr: 1 }} /> quote</Box>
                        <Divider orientation="vertical" flexItem sx={{ borderColor: 'gray', borderWidth: '2px', opacity: 0.7 }} />
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}>15</Box>
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}>30</Box>
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}>60</Box>
                        <Box sx={{ opacity: '0.3', cursor: 'pointer', '&:hover': { opacity: 0.8, transition: 'opacity 0.3s' }, display: 'flex', alignItems: 'center' }}>120</Box>
                    </Stack>
                </Box>
                <Box sx={{ width: '100%' }}>
                    {/* <TextareaAutosize minRows={3} placeholder="Minimum 3 rows" /> */}
                    <TypingArea />
                </Box>
            </Box>
        </Box>
    )
}
