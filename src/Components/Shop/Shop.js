import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    return (
        <div className='Shop-container'>
               <div className='products-container'>
                {
                    products.map(product => <Products
                    key={product.id}
                    product={product}
                    ></Products>)
                }
               </div>
            <div>
                <h1>Selected Clothes</h1>
            </div>
        </div>
    );
};

export default Shop;