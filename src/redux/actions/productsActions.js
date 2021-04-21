import { bindActionCreators } from "redux";
import { dataBase } from "../../services/firebase/firebase";
import { ADD_PRODUCT, GET_PRODUCTS, DELETE_PRODUCT } from "../types"

export const get_products_action = () => async (dispatch) => {
    dataBase.collection("products").onSnapshot((querySnapshot) => {
        const response = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            response.push({ ...doc.data(), id: doc.id });
            console.log(response);
        });
        dispatch({
            type: GET_PRODUCTS,
            payload: response
        });
    })
}

export const add_products_action = (products) => async (dispatch) => {
    await dataBase.collection('products').doc().set(products);
    dispatch({
        type: ADD_PRODUCT
    });
}

export const delete_products_action = (id) => async (dispatch) => {
    await dataBase.collection('products').doc(id).delete();
    dispatch({
        type: DELETE_PRODUCT
    });
}