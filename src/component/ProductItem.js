import { React, useState } from 'react';
function ProductItem({product, addtocart}){
    const [isHovered, setIsHovered] = useState(false);
        return (
            <div className="product_item">
                <style jsx>{`
                .product_item img{
                    width: 20%;
                    height: auto;
                }
            `}</style>
                <img src={product.image} alt={product.name} />
                <p
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {product.name}
                </p>
                {isHovered && <p>{product.description}</p>}
                <p>{product.price}</p>
                <button onClick={() => addtocart(product)}>Add to Cart</button>
            </div>
        )
}
export default ProductItem;