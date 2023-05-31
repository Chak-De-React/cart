import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./actionTypes"; 


export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
})

export const checkout = () => ({
    type: CHECKOUT
})