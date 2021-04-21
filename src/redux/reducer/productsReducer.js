//typos de acción
import { ADD_PRODUCT, GET_PRODUCTS, DELETE_PRODUCT } from "../types"
// datos iniciales en main
const initialState = {
    listOfProducts: [],
    productForm: {
        productName: '',
        description: '',
        imgUrl: ''
    },
    deletedId: null
}

// funcion que evalua los tipos de acciones
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                listOfProducts: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                productForm: {
                    productName: '',
                    description: '',
                    imgUrl: ''
                }
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deletedId: action.payload
            }
        default: return state
    }
}