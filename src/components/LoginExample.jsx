import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import user from '../helpers/users'
import { obtenerDatosAxios } from '../services/users';

export default function LoginExample() {
    let history = useHistory();
    const [users, setUsers] = useState([]);
    const localUser = user;

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await obtenerDatosAxios();
        setUsers(response)
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
    const [errors, setErrors] = useState(true);
    const handleChange = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }
    const { userName, email, password } = userData;
    useEffect(() => {
        if (userName.trim() === localUser.userName
            && email.trim() === localUser.email
            && password.trim() === localUser.password) {
            setErrors(false)
        } else {
            setErrors(true)
        }
    }, [userData])
    useEffect(() => {
        if (userName.trim() === localUser.userName) {
            setError({ ...error, userName: false })
        } else {
            setError({ ...error, userName: true })
        }
    }, [userName]);
    useEffect(() => {
        if (email.trim() === localUser.email) {
            setError({ ...error, email: false })
        } else {
            setError({ ...error, email: true })
        }
    }, [email])
    useEffect(() => {
        if (password.trim() === localUser.password) {
            setError({ ...error, password: false })
        } else {
            setError({ ...error, password: true })
        }
    }, [password])
    const handleSubmit = e => {
        e.preventDefault();
        const filterUserName = users.filter(user => user.username === userName.trim());
        const filterEmail = users.filter(user => user.email === email.trim());
        if (filterUserName.length && filterEmail.length !== 0) {
            alert(`Bienvenido ${userName}`);
        } else {
            alert("Nombre de usuario o correo incorrectos")
        }
    }

    return (
        <>
            <div>
                <Grid item xs={12}>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    name="userName"
                                    onChange={handleChange}
                                    variant="outlined"
                                    label="Usuario"
                                    type="text"
                                    error={error.userName} />
                            </Grid>
                            <Grid item xs={12}>
                                {error.userName ? <div style={{ color: "red" }}>Digite un usuario válido</div> : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="email"
                                    variant="outlined"
                                    onChange={handleChange}
                                    label="Email"
                                    type="email" />
                            </Grid>
                            <Grid item xs={12}>
                                {error.email ? <div style={{ color: "red" }}>Digite un correo válido</div> : null}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    onChange={handleChange}
                                    label="Password"
                                    type="password" />
                            </Grid>
                            <Grid item xs={12}>
                                {error.password ? <div style={{ color: "red" }}>Digite una contraseña válida</div> : null}
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    style={{ textTransform: "none" }}
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                >
                                    Iniciar Sesión
                        </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </>
    )
}
