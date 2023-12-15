import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import classes from './Cart.module.css'


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart();

    return (
        <div className={classes.container}>
            <h3>This is your cart:</h3>
            <div className={classes.cart}>
                {cart.map(prod => (
                    <div key={prod.id} className={classes.prod}>
                        <h3>{prod.artist}</h3>
                        <img src={prod.img} alt={prod.artist} style={{ width: 100 }} />
                        <p className={classes.price}>Price: ${prod.price}</p>
                        <p>Quantity: {prod.quantity || 0}</p>
                    </div>
                ))}
            </div>
            <h4>Products: {totalQuantity}</h4>
            <h4>Total: ${total}</h4>
            <button onClick={() => clearCart()}>Clear cart</button>
            <Link to='/checkout' style={{ fontSize: 'larger', marginTop: '20px' }}>Checkout</Link>
        </div>
    );
};

export default Cart;