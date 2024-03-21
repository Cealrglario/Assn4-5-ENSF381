import {React, useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';

function Productpage() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true); //cart was loading to fast so added loading state to fix it
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if(!loading){ 
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, loading]);

    const addtocart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            const updatedItems = cart.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedItems);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }

    function updatequantity(id, quantity) {
        setCart(prevCart => prevCart.map(item => item.id === id ? { ...item, quantity } : item));
    }

    return (
        <div>
          <Header />
          <table>
            <tr>
                <td><ProductList addtocart={addtocart} /></td>
                <td style={{verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart} updatequantity={updatequantity}/></td>
            </tr>
          </table>
          <Footer />
        </div>
      );
}
export default Productpage;
