import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'; // Import the CSS file

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header>
            <div className='header-logo'>Beauty Care</div>
            <nav>
                <Link to='/product-listing'>Product Listing</Link>
                <Link to='/shopping-cart'>
                    Shopping Cart <span className='cart-count'>({totalItems})</span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
