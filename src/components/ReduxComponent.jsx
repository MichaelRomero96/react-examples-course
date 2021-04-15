import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    login_action,
    logout_action,
    product_delete_all_action,
    product_change_action
} from '../redux/actions/mainActions';

export default function ReduxComponent() {
    const { user, products } = useSelector(state => state.main);
    const dispatch = useDispatch();
    const userData = { id: 1, name: 'Luis' };
    return (
        <>
            <h1>Desde Componente</h1>
            <h1>Usuario: {user?.name}</h1>
            <button
                onClick={() => dispatch(login_action(userData))}
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
                onClick={() => dispatch(product_delete_all_action())}
            >
                Eliminar Productos
            </button>
            <button
                onClick={() => dispatch(product_change_action())}
            >
                Cambiar Productos
            </button>

        </>
    )
}
