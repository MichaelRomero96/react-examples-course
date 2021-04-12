import { createContext, useContext, useReducer } from "react";
import LoginGoogleReducer, { initialStore } from "../reducers/LoginGoogleReducer";

const LoginGoogleContext = createContext();

const LoginGoogleProvider = ({ children }) =>
    <LoginGoogleContext.Provider
        value={useReducer(LoginGoogleReducer, initialStore)}>
        {children}
    </LoginGoogleContext.Provider>

const useStore = () => useContext(LoginGoogleContext)[0];
const useDispatch = () => useContext(LoginGoogleContext)[1];

export { LoginGoogleContext, useStore, useDispatch };
export default LoginGoogleProvider;