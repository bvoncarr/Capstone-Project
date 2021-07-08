import React from 'react';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import Navbar from './components/NavBar/Navbar';

const App = () => {
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    )
}

export default App;