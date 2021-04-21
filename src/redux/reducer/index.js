import { combineReducers } from 'redux';
//importamos todos los reducers que creemos
import mainReducer from './mainReducer';
import productsReducer from './productsReducer';

export default combineReducers({
    mainRedux: mainReducer,
    products: productsReducer
})