
// se puede usar la estructura que sea, lo importante es que sean distintos entre si
const types = {
    setUsers: 'SET_USERS'
}

const initialStore = {
    users: []
}

// se crea el reducer
// parametros state anterior o inicial y  action realizará la actualación de estado
function UsersReducer(state, action) {
    switch (action.type) {
        case types.setUsers:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export { initialStore, types };
export default UsersReducer;