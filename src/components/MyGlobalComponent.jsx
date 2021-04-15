import { useDispatch, useStore } from "../context/provider/MyComponentProvider";
import { types } from "../context/reducers/MyComponentReducer";

export default function MyGlobalComponent() {
    //ejemplo de ContextAPI
    const { user, products } = useStore();
    const dispatch = useDispatch();
    return (
        <>
            <h1>Component</h1>
            <h2>User: {user?.name}</h2>
            <button
                onClick={() => dispatch({ type: types.authLogout })}>
                Logout
            </button>
            <button
                onClick={() => dispatch(
                    {
                        type: types.authLogin,
                        payload: { id: 1, name: 'Jorge' }
                    }
                )}>
                Login
            </button>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.title}</li>
                ))
                }
            </ul>
            <button
                onClick={() => dispatch({ type: types.productDeleteAll })}>
                Delete All
            </button>
            <button
                onClick={() => dispatch(
                    {
                        type: types.productChange,
                        payload: [{ id: 3, title: 'Product #3' }]
                    }
                )}>
                Change
            </button>

        </>
    )
}
