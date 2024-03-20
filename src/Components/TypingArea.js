import React from 'react'

const typingText = "Hello there welcome";

export default function TypingArea() {
    return (
        <textarea placeholder={typingText} rows={3} style={{backgroundColor: 'transparent', color: 'white', fontFamily: 'Roboto Mono', fontSize: '3rem', outline: 'none', border: 'none', resize: 'none'}}></textarea>
    )
}
