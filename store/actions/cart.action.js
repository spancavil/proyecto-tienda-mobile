export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAN_CART = 'CLEAN_CART';
export const SET_BUYER = 'SET_BUYER';

export const addItem = (item) => ({
    type: ADD_CART_ITEM,
    payload: item,
})

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
})

export const cleanCart = () => ({
    type: CLEAN_CART,
})

export const setBuyer = (buyer) => ({
    type: SET_BUYER,
    payload: buyer,
}) 