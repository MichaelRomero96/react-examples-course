import { createContext, useContext, useReducer } from "react";
import UsersReducer, { initialStore } from "../reducers/UsersReducer";

const UsersContext = createContext();

const UsersProvider = ({ children }) =>
    <UsersContext.Provider
        value={useReducer(UsersReducer, initialStore)}>
        {children}
    </UsersContext.Provider>

const useStore = () => useContext(UsersContext)[0];
const useDispatch = () => useContext(UsersContext)[1];

export { UsersContext, useStore, useDispatch };
export default UsersProvider;