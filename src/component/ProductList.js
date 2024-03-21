import React from "react";
import ProductItem from "./ProductItem";
import product from "../data/products";

function ProductList({ addtocart }) {
    return (
        <div className="product_list">
            {product.map((product) => (
            <ProductItem key={product.id} product={product} addtocart={addtocart}/>
            ))}
        </div>
    );
    
}
export default ProductList;