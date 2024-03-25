import React from 'react';
import logo from '../../Images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <h1 className='hearder-line'>Welcome To Hero Tech</h1>
                <div className='Router-A'>
                    <a href="">Shop</a>
                    <a href="">Order</a>
                    <a href="">Review</a>
                    <a href="">Blogs</a>
                    <a href="">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;