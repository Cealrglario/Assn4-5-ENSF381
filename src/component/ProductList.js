import {React, useEffect, useState} from "react";
import ProductItem from "./ProductItem";

function ProductList({ addtocart }) {
    const [product, setProduct] = useState([]);
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get_products')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                setMessage("Unknown error occured. Try again later.");
            }
        })
        .then(data => setProduct(data)) 
        .catch(error => setMessage("Failed to fetch data."));
    
    }, []); //
    return (
        <div className="product_list">
            {message && <h1>{message}</h1>}
            {product.map((product) => (
            <ProductItem key={product.id} product={product} addtocart={addtocart}/>
            ))}
        </div>
    );
    
}
export default ProductList;