//Debería venir de axios o algo así

import { FILTERED_PRODUCTS, GET_PRODUCTS, SELECTED_PRODUCT } from "../actions/products.action";

const initialState = {
    products: [],
    loading: true,
    filteredProducts: [],
    selected: null
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        case FILTERED_PRODUCTS:
            const productsFiltered = state.products.filter(prod => prod.category === action.categoryId)
            return productsFiltered ?
            {...state, loading: false, filteredProducts: productsFiltered}
            :
            {...state, filteredProducts: []}
        case SELECTED_PRODUCT:
            const productSelected = state.products.find(prod => prod.id === action.productId);
            return productSelected ?
            {...state, selected: productSelected}
            :
            {...state, selected: null}
        default:
            return state
    }
}

export default ProductsReducer;