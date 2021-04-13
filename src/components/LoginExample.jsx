import React, { useEffect, useState } from 'react'

export default function LoginExample() {
    const localUser = {
        userName: "jorge",
        email: "jorge@gmail.com",
        password: "123456"
    }
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        userName: false,
        email: false,
        password: false
    })
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const { userName, email, password } = userData;
    useEffect(() => {
        if (userName.trim() === localUser.userName) {
            setError({ ...error, userName: true })
        } else {
            setError({ ...error, userName: false })
        }
        if (email.trim() === localUser.email) {
            console.log("si es correo")
        }
        if (password.trim() === localUser.password) {
            console.log("si es password")
        }
    }, [userData])
    const handleSubmit = e => {
        e.preventDefault();
        if (error.userName && error.email && error.password === true) {
            console.log("validado")
        }
    }

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="userName"
                    onChange={handleChange}
                    placeholder="Usuario"
                    type="text" />
                <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    type="email" />
                <input
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    type="password" />
                <button type="submit">
                    Iniciar Sesión
                </button>
            </form>
        </>
    )
}
