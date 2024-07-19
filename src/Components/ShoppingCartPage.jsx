import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../cartSlice.js'
import './style.css'


const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id))
    }

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="shopping-cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.thumbnail} alt={item.name} className="image-style" />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <button onClick={() => handleIncrement(item.id)}>+</button>
                                <button onClick={() => handleDecrement(item.id)}>-</button>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
                        <button onClick={handleClearCart}>Clear Cart</button>
                        <Link to="/checkout">
                            <button>Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
            <Link to="/product-listing">
                <button>Continue Shopping</button>
            </Link>
        </div>
    );
}

export default ShoppingCartPage;