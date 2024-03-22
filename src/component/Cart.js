import { React, useEffect, useState} from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeFromCart, updatequantity}) {
    const [total, setTotal] = useState(0);


    
    useEffect(() => {
        let newtotal = 0;
        cart.forEach(item => {
            newtotal += item.price * item.quantity;
        });
        setTotal(newtotal);
    }, [cart]);
    
        
    
    
    return (
        <div className="cart">
            {cart.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updatequantity={updatequantity}/>
            ))}
            <h2>Shopping Cart</h2>
            <p>Total (in Cart): {(total).toFixed(2)}</p>
        </div>
    );
}
export default Cart;