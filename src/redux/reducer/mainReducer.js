//typos de acción
import {
    AUTH_LOGOUT,
    AUTH_LOGIN,
    PRODUCT_DELETE_ALL,
    PRODUCT_CHANGE
} from "../types"
// datos iniciales en main
const initialState = {
    user: { id: 1, name: 'Luis' },
    products: [
        { id: 1, title: 'product#1' },
        { id: 2, title: 'product#2' },
        { id: 3, title: 'product#3' }
    ]
}

// funcion que evalua los tipos de acciones
export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGOUT:
            return {
                ...state,
                user: null
            }
        case AUTH_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case PRODUCT_DELETE_ALL:
            return {
                ...state,
                products: []
            }
        case PRODUCT_CHANGE:
            return {
                ...state,
                products: action.payload
            }
        default: return state
    }
}