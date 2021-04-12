
// se puede usar la estructura que sea, lo importante es que sean distintos entre si
const types = {

}

const initialStore = {

    user: { id: 1, name: 'Carlos' },
}

// se crea el reducer
// parametros state anterior o inicial y  action realizará la actualación de estado
function LoginGoogleReducer(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export { initialStore, types };
export default LoginGoogleReducer;