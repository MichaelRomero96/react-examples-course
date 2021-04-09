import axiosClient from './axios';
// import axios from 'axios';

// const baseUrl = 'http://localhost:3000'

export const iniciarSesion = async (usuario) => {
    try {
        const response = await axiosClient.post('/login', usuario)
        return response.data
    } catch (e) {
        console.log(e)
    }
}