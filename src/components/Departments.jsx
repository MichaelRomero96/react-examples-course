import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { departmentData, cityData } from '../services/departamentos';

export default function Departments() {

    const [departments, setDepartments] = useState([]);
    const [cities, setCities] = useState([]);
    const [data, setData] = useState({
        id_unde: ""
    })


    const obtenerDatos = async () => {
        const data = await departmentData();
        setDepartments(data)
    }
    const obtenerDatosMunicipios = async (data) => {
        const response = await cityData(data);

        setCities(response);
        console.log(cities)
    }
    useEffect(() => {
        obtenerDatos();
    }, []);
    useEffect(() => {
        console.log(departments)
    }, [departments])

    const { id_unde } = data;

    useEffect(() => {
        if (id_unde.length !== 0) {
            obtenerDatosMunicipios(data)
        }
    }, [data])

    const handleChange = ({ target }) => {
        setData({
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>Desde Departments</h1>
            <FormControl>
                <InputLabel>Departamentos</InputLabel>
                <Select
                    style={{ width: '200px' }}
                    name="id_unde"
                    label="Departamentos"
                    onChange={handleChange}>
                    {departments.length ?
                        departments.map(item => (
                            <MenuItem value={item.id_codigo} key={item.id_codigo}>{item.descripcion}</MenuItem>
                        ))
                        : null}
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel>Ciudad o Municipio</InputLabel>
                <Select
                    style={{ width: '200px' }}
                    name="municipios"
                    label="municipios">

                    {cities.length ?
                        cities?.map(item => (
                            <MenuItem value={item.id_codigo} key={item.id_codigo}>{item.descripcion}</MenuItem>
                        ))
                        : null}

                </Select>
            </FormControl>

        </>
    )
}
