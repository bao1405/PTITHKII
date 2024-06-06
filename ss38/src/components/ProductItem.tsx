import React, { memo } from 'react';

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <p>ID: {product.id}</p>
      <p>Name: {product.productName}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <hr />
    </div>
  );
};

export default memo(ProductItem);
