import React, { useState, useEffect } from 'react'
import {
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@material-ui/core'
import { departmentData, cityData } from '../services/departamentos'

function Login() {

    const [departamentos, setDepartamentos] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [data, setData] = useState({
        id_unde: ''
    })

    useEffect(() => {
        obtenerDepartamentos()
    }, [])

    const { id_unde } = data;

    useEffect(() => {
        if (id_unde.length) {
            obtenerMunicipios()
        }
    }, [data])

    const obtenerMunicipios = async () => {
        const responseMunicipios = await cityData(data)
        setMunicipios(responseMunicipios)
    }

    const obtenerDepartamentos = async () => {
        const datos = await departmentData()
        setDepartamentos(datos)
        console.log(datos)
    }
    const handleChange = e => {
        setData({
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <h1>Iniciar Sesión</h1>
            <FormControl>
                <InputLabel>Departamento</InputLabel>
                <Select
                    name='id_unde'
                    label='Departamento'
                    style={{ width: '200px' }}
                    onChange={handleChange}

                >
                    {departamentos.map(item => (
                        <MenuItem key={item.id_codigo} value={item.id_codigo}>
                            {item.descripcion}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Ciudad o Municipio</InputLabel>
                <Select
                    name='id_unde'
                    label='Departamento'
                    style={{ width: '200px' }}

                >
                    {municipios.length ?
                        municipios.map(item => (
                            <MenuItem key={item.id_codigo} value={item.id_codigo}>
                                {item.descripcion}
                            </MenuItem>
                        ))
                        :
                        <MenuItem>
                            Ningún elemento
                        </MenuItem>}
                </Select>
            </FormControl>
        </>
    )
}

export default Login
