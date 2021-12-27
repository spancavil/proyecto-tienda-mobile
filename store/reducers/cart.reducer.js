import { ADD_CART_ITEM, CLEAN_CART, REMOVE_ITEM } from "../actions/cart.action";

const initialState = {
    cart: [],
    buyer: null,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            const productoRepetido = state.cart.find(item => item.id === action.payload.id)
            console.log(productoRepetido); 
            console.log(action);
            return productoRepetido ? 
            {...state}
            :
            {...state, cart: [...state.cart, action.payload]}
        case REMOVE_ITEM:
            const cartFiltrado = state.cart.filter(item => item.id !== action.payload.id)
            return {...state, cart: cartFiltrado}
        case CLEAN_CART:
            return {...state, cart: []}
        default:
            return {...state}
            break;
    }
}

export default CartReducer;