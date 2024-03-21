import { React, useState } from 'react';
function ProductItem({product, addtocart}){
    const [isHovered, setIsHovered] = useState(false);
        return (
            <div className="product_item">
                <img src={product.image} alt={product.name} />
                <h2
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {product.name}
                </h2>
                {isHovered && <p>{product.description}</p>}
                <p>{product.price}</p>
                <button onClick={() => addtocart(product)}>Add to Cart</button>
            </div>
        )
}
export default ProductItem;