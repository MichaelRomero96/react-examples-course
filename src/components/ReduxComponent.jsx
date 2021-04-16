import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    logout_action,
} from '../reduxDucks/mainDucks';

export default function ReduxComponent() {
    const { products } = useSelector(state => state.main);
    const { id, name, email, userName } = useSelector(state => state.login.user)
    const { user } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const userData = { id: 1, name: 'Luis' };
    return (
        <>
            <h1>Desde Componente</h1>
            <h1>Usuario: {name}</h1>
            <h1>email: {email}</h1>
            <h1>Nick: {userName}</h1>
            <h1>id: {id}</h1>
            <h1>{user.name}</h1>
            <button
            // onClick={() => dispatch(login_action(userData))}
            >
                Login
            </button>
            <button
                onClick={() => dispatch(logout_action())}
            >
                Logout
            </button>
            <h1>Productos</h1>
            {products.map(product => (
                <ul key={product.id}>{product.title}</ul>
            ))}

            <button
            // onClick={() => dispatch(product_delete_all_action())}
            >
                Eliminar Productos
            </button>
            <button
            // onClick={() => dispatch(product_change_action())}
            >
                Cambiar Productos
            </button>

        </>
    )
}
