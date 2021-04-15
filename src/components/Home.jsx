import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function Home({ checkLogin, logout }) {
    const history = useHistory();
    useEffect(() => {
        if (checkLogin === false) {
            history.push("/login")
        }
    }, [checkLogin]);

    return (
        <div>
            <h1>home</h1>
            <button onCLick={() => logout(null)}>Cerrar Sesión</button>
        </div>
    )
}
