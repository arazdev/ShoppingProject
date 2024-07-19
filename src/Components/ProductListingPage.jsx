import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice'
import './style.css'

const items = [
    { id: 1, name: 'Moisturizing Cream', price: 25, category: 'Skincare', thumbnail: '/image/beautyImage1.jpeg' },
    { id: 2, name: 'Lipstick', price: 15, category: 'Makeup', thumbnail: '/image/beautyImage2.jpg' },
    { id: 3, name: 'Shampoo', price: 20, category: 'Haircare', thumbnail: '/image/beautyImage3.webp' },
    { id: 4, name: 'Foundation', price: 30, category: 'Makeup', thumbnail: '/image/beautyImage4.jpg' },
    { id: 5, name: 'Eye Cream', price: 35, category: 'Skincare', thumbnail: '/image/beautyImage5.jpg' }
];


const ProductListingPage = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <div className='product-grid'>
            {items.map((item) => (
                <div key={item.id} className='image-container'>
                    <img src={item.thumbnail} alt={item.name} className='image-style' />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductListingPage;