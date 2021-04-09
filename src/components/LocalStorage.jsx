import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
// import { useLocalStorage } from '../hooks/useLocalStorage';

export default function LocalStorage() {
    const [text, setText] = useLocalStorage('text', '')
    const [secondText, setScondText] = useLocalStorage('secondText', '')
    return (
        <>
            <textarea
                onChange={({ target }) => setText(target.value)}
                value={text}
                placeholder="Texto Prueba">
            </textarea>
            <textarea
                onChange={({ target }) => setScondText(target.value)}
                value={secondText}
                placeholder="Texto Prueba 2">
            </textarea>
        </>

    )
}
