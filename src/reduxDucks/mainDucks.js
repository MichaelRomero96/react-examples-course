//datos iniciales
const initialState = {
    user: { id: 1, name: 'Nicolás' },
    products: [
        { id: 1, title: 'Product#1' },
        { id: 2, title: 'Product#2' }
    ]
}
//types
const AUTH_LOGOUT = 'AUTH_LOGOUT'
//reducers
export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGOUT:
            return {
                ...state,
                user: null
            }
        default: return state
    }
}
// actions
export const logout_action = () => async (dispatch) => {
    dispatch({
        type: AUTH_LOGOUT
    })
}