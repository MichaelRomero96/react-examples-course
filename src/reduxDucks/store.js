import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

//Ducks
import mainReducer from './mainDucks';
import LoginReducer from './LoginDucks';

//declarariamos el combineReducer
const rootReducer = combineReducers({
    main: mainReducer,
    login: LoginReducer
})
//almacenar datos en la extensión de redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}