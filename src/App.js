

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';


const App = () => {


    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />

            </Routes>
        </div>
    )
}

export default App;













