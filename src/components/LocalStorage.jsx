import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function LocalStorage() {
    const [text, setText] = useLocalStorage("text", "");
    const [text_2, setText_2] = useLocalStorage("text_2", "")

    return (
        <>
            <textarea
                onChange={({ target }) => setText(target.value)}
                value={text}
                placeholder="Texto Prueba">
            </textarea>
            <textarea
                onChange={({ target }) => setText_2(target.value)}
                value={text_2}
                placeholder="Texto Prueba 2">
            </textarea>
        </>

    )
}
