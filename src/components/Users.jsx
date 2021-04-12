import { useEffect } from "react";
import { obtenerDatosAxios } from "../services/users";

export default function Users({ setUsers, ...datos }) {

    const getUsers = async () => {
        const response = await obtenerDatosAxios();
        setUsers(response);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1>Users</h1>
        </>
    )
}
