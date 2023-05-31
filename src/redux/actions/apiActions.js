import * as types  from "./actionTypes" 
import axios from "axios"


export const fetchProductsRequest = () => ({
    type: types.FETCH_PRODUCTS_REQUEST
})

export const fetchProductsSuccess = (products) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: products
})

export const fetchProductsFailure = (error) => ({
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error
})


export const fetchProducts = () => {
    return (dispatch) => {
             dispatch(fetchProductsRequest())
             axios.get("https://dummyjson.com/products")
             .then(response => 
                {
                    dispatch(fetchProductsSuccess(response.data.products))
                     console.log(response.data.products)
                })
            
             .catch(error => dispatch(fetchProductsFailure(error)))
             
    }
}






