import React, { useState, useEffect } from 'react';
import { obtenerDatosAxios } from '../services/users'


export default function AsyncAwait() {

    const datos = [
        { nombre: 'Jorge', edad: 40, ubicacion: 'Manizales' },
        { nombre: 'Eduardo', edad: 30, ubicacion: 'Medellín' },
        { nombre: 'Lucas', edad: 38, ubicacion: 'Bogotá' },
        { nombre: 'Fernando', edad: 20, ubicacion: 'Montería' },
    ]

    const [obtenerDatos, setObtenerDatos] = useState([]);
    // metodo fetch JS
    //     async function consumirDatos() {
    //         const data = await fetch(baseUrl)
    //         //await espera a que el servidor o la api nos devuelva una respuesta
    //         const respuesta = await data.json();
    //         setObtenerDatos(respuesta)

    //     }

    const request = {
        username: 'lmsnand',
        password: 123456
    }

    useEffect(() => {
        obtenerRespuesta();
    }, [])

    const obtenerRespuesta = async () => {
        try {
            const response = await obtenerDatosAxios();
            setObtenerDatos(response)
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        console.log(obtenerDatos)
    }, [obtenerDatos])

    return (
        <>
            {obtenerDatos.length ?
                obtenerDatos.map(item => (
                    <li>{item.name} - {item.email} - {item.website}</li>
                ))
                :
                <h1>No se ha cargado ningun dato</h1>
            }
        </>
    )
}
