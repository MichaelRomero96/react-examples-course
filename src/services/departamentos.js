import axiosClient from './axios';
// import axios from 'axios';


export const departmentData = async () => {
    try {
        const response = await axiosClient.get('/departamentos')
        return response.data.departamentos
    } catch (e) {
        console.log(e)
    }
}

export const cityData = async (data) => {
    try {
        const response = await axiosClient.post('/municipios', data)
        return response.data.municipios
    } catch (e) {
        console.log(e)
    }
}
