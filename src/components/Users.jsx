import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { obtenerDatosAxios } from '../services/users';

export default function Users() {

    const [users, setUsers] = useState([]);

    const obtenerDatos = async () => {
        const data = await obtenerDatosAxios();
        setUsers(data)
    }
    useEffect(() => {
        obtenerDatos();
    }, []);
    useEffect(() => {
        console.log(users)
    }, [users])
    return (
        <>
            <h1>Desde Users</h1>
            { users.length ?
                users.map(user => (
                    <>
                        <li key={user.id}>
                            {user.name}
                        </li>
                        <ul>{user.email}</ul>
                        <ul>{user.username}</ul>
                        <ul>{user.body}</ul>
                    </>
                ))
                : null}
        </>
    )
}
