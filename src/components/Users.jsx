import { useEffect } from "react";
import { useDispatch, useStore } from "../context/provider/UsersProvider";
import { types } from "../context/reducers/UsersReducer";
import { obtenerDatosAxios } from "../services/users";

export default function Users() {
    const { users } = useStore();
    const dispatch = useDispatch();

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch({
            type: types.setUsers,
            payload: data
        })
    }
    useEffect(() => {
        console.log(users)
    }, [users])

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1>Users</h1>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </>
    )
}
