
// se puede usar la estructura que sea, lo importante es que sean distintos entre si
const types = {
    authLogin: 'AUTH_LOGIN',
    authLogout: 'AUTH_LOGOUT',
    productDeleteAll: 'PRODUCT_DELETE_ALL',
    productChange: 'PRODUCT_CHANGE'
}

const initialStore = {

    user: { id: 1, name: 'Luis' },
    products: [
        { id: 1, title: 'Product #1' },
        { id: 2, title: 'Product #2' }
    ]
}

// se crea el reducer
// parametros state anterior o inicial y  action realizará la actualación de estado
function MyComponentReducer(state, action) {
    switch (action.type) {
        case types.authLogout:
            return {
                ...state,
                user: null
            }
        case types.authLogin:
            return {
                ...state,
                user: action.payload
            }
        case types.productDeleteAll:
            return {
                ...state,
                products: []
            }
        case types.productChange:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export { initialStore, types };
export default MyComponentReducer;