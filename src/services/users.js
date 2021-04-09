import axiosClient from './axios';

export const obtenerDatosAxios = async () => {
    try {
        const res = await axiosClient.get('/comments');
        return res.data
    } catch (e) {
        console.log(e)
    }
}
