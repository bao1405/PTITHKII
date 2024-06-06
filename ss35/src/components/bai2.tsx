import React, { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const ProductComponent: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: "coca cola",
        price: 1000,
        quantity: 10
    });

    return (
        <div>
            <h1>Bài 2</h1>
            <h1>Thông tin sản phẩm</h1>
            <p>id: {product.id}</p>
            <p>name: {product.name}</p>
            <p>price: {product.price}$</p>
            <p>quantity: {product.quantity}</p>
        </div>
    );
};

export default ProductComponent;
