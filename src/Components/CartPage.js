
import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import {removeFromCart, checkout } from "../redux/actions/cartActions";

const CartPage = () => {
      const {cart} = useSelector(state => state.cart);
      console.log(cart)
    const dispatch = useDispatch();


    const totalPrice =  cart.reduce((total, product) => total + product.price, 0)


    return(
        <div>
              {
                    cart.map(item => (
                        <div key={item.id}>
                           <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>{item.discountPercentage}</p>
                            <img src={item.thumbnail} alt={item.title} />
                            <button
                              onClick = {() => dispatch(removeFromCart(item.id))}
                            >Remove From Cart</button>
                        </div>
                    ))
              }
                <h1>Total Price: {totalPrice}</h1>

                <button
                 onClick={() => dispatch(checkout())}
                >Checkout</button>
        </div>
    )
}

export default CartPage;