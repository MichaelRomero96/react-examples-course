import { AUTH_LOGIN, AUTH_LOGOUT, PRODUCT_CHANGE, PRODUCT_DELETE_ALL } from "../types"

//accion cerrar sesión
export const logout_action = () => async (dispatch) => {
    dispatch({
        type: AUTH_LOGOUT
    })
}
//accion Iniciar sesión
export const login_action = (userData) => async (dispatch) => {
    dispatch({
        type: AUTH_LOGIN,
        payload: userData
    })
}
// accion eliminar productos
export const product_delete_all_action = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_DELETE_ALL
    })
}
//accion cambiar producto
export const product_change_action = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_CHANGE,
        payload: [{ id: 4, title: 'product#4' }]
    })
}