import { createContext, useContext, useReducer } from "react";
import MyComponentReducer, { initialStore } from "../reducers/MyComponentReducer";

const MyComponentContext = createContext();

const MyComponentProvider = ({ children }) =>
    <MyComponentContext.Provider
        value={useReducer(MyComponentReducer, initialStore)}>
        {children}
    </MyComponentContext.Provider>

const useStore = () => useContext(MyComponentContext)[0];
const useDispatch = () => useContext(MyComponentContext)[1];

export { MyComponentContext, useStore, useDispatch };
export default MyComponentProvider;