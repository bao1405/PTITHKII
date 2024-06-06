import React from 'react';

const Product = ({ product }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p><b>Price:</b> ${product.price}</p>
            <p><b>Quantity:</b> {product.quantity}</p>
        </div>
    );
};

export default Product;
