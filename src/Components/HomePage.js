import React, {useEffect} from 'react'; 
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/actions/apiActions'; 
import {addToCart} from '../redux/actions/cartActions';


const HomePage = () => {
    // const loading = useSelector(state => state.products.loading); 
    // const products = useSelector(state => state.products.products);
    // const error = useSelector(state => state.products.error); 
    const {loading, products, error} = useSelector(state => state.products);
    console.log(loading, products, error)
    const dispatch = useDispatch();

        
    useEffect(() => {
         dispatch(fetchProducts())
    },[])

     if(loading) return <h1>Loading...</h1>
     if(error) return <h1>{error}</h1>

    return(
        <div>
                 {
                    products.map(product => (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                            <p>{product.discountPercentage}</p>
                            <p>{product.rating}</p>
                            <p>{product.stock}</p>
                            <p>{product.brand}</p>
                            <p>{product.category}</p>
                            <img src={product.thumbnail} alt={product.title} />
                            <button
                              onClick = {() => {dispatch(addToCart(product))
                                console.log(product)
                            }}
                            > Add to Cart</button>
                        </div>
                    ))
                 }
        </div>
    )
} 

export default HomePage;

// product = {"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/1/1.jpg","https://i.dummyjson.com/data/products/1/2.jpg","https://i.dummyjson.com/data/products/1/3.jpg","https://i.dummyjson.com/data/products/1/4.jpg","https://i.dummyjson.com/data/products/1/thumbnail.jpg"]}