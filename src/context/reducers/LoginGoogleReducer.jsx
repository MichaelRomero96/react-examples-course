
// se puede usar la estructura que sea, lo importante es que sean distintos entre si
const types = {
    googleLogin: 'GOOGLE_LOGIN',
    googleLogout: 'GOOGLE_LOGOUT'

}

const initialStore = {

    user: {
        email: "",
        familyName: "",
        givenName: "",
        googleId: "",
        imageUrl: "",
        name: ""
    }
}

// se crea el reducer
// parametros state anterior o inicial y  action realizará la actualación de estado
function LoginGoogleReducer(state, action) {
    switch (action.type) {
        case types.googleLogin:
            return {
                ...state,
                user: action.payload
            }
        case types.googleLogout:
            return {
                ...state,
                user: {
                    email: "",
                    familyName: "",
                    givenName: "",
                    googleId: "",
                    imageUrl: "",
                    name: ""
                }
            }
        default:
            return state;
    }
}

export { initialStore, types };
export default LoginGoogleReducer;