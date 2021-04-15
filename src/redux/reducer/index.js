import { combineReducers } from 'redux';
//importamos todos los reducers que creemos
import mainReducer from './mainReducer';

export default combineReducers({
    main: mainReducer
})