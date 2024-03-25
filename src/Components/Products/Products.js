import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = ({ product, handlebutton }) => {
    const { img, name, price, ratings, stock } = product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price:$ {price}</h4>
            <p><small>Ratings: {ratings}</small></p>
            <p>stock: {stock}</p>
            <button className='cart-button' onClick={handlebutton} >Add To Cart<FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Products;