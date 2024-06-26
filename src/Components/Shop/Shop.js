import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);
    const handlebutton = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (

        <div>
            <section>
                <div className='Shop-container'>
                    <div className='products-container'>
                        {
                            products.map(product => <Products
                                key={product.id}
                                product={product}
                                handlebutton={handlebutton}
                            ></Products>)
                        }
                    </div>
                    <div className='Clothes-container'>
                        <h1 className='clothes-text'>Selected Clothes: {cart.length}</h1>
                        
                        <button className='button-1'>Choose 1 for me</button>
                        <br />
                        <button className='button-2'>Choose Again</button>
                    </div>
                </div>
            </section>
            <section>
                <Blogs></Blogs>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>


    );
};

export default Shop;