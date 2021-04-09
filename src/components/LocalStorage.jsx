import React, { useState } from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';

export default function LocalStorage() {
    const [text, setText] = useState(
        window.localStorage.getItem("text")
    );
    const [secondText, setsecondText] = useState(
        window.localStorage.getItem("secondText")
    )
    const setTextLocalStorage = value => {
        try {
            setText(value)
            window.localStorage.setItem("text", value)
        } catch (error) {
            console.error(error)
        }
    }
    const setSecondTextLocalStorage = value => {
        try {
            setsecondText(value)
            window.localStorage.setItem("secondText", value)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <textarea
                onChange={({ target }) => setTextLocalStorage(target.value)}
                value={text}
                placeholder="Texto Prueba">
            </textarea>
            <textarea
                onChange={({ target }) => setSecondTextLocalStorage(target.value)}
                value={secondText}
                placeholder="Texto Prueba 2">
            </textarea>
        </>

    )
}
