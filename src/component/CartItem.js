import { useState, useEffect } from 'react';


function CartItem({ item, removeFromCart, updatequantity }) {
    const [quantity, setquantity] = useState(item.quantity);

    useEffect(() => {
        setquantity(item.quantity);
    }, [item.quantity]);


    useEffect(() => {
        if (quantity === 0) {
            removeFromCart(item.id);
        }
    }, [quantity, item.id, removeFromCart]);

    const handleRemove = () => {
        if (quantity > 1) {
            setquantity(quantity - 1);
            updatequantity(item.id, quantity - 1);
        } else {
            removeFromCart(item.id);
        }
    }

    return (
        <div className="cart_item">
            <style jsx>{`
                .cart_item img{
                    width: 250px;
                    height: auto;
                }
            `}</style>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: {(item.price * quantity).toFixed(2)}</p>
            <button onClick={() => handleRemove() }>Remove</button>
        </div>
    )
}
export default CartItem;