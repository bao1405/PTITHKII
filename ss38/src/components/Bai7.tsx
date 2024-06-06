import React, { useMemo } from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

interface Bai7Props {
  products: Product[];
}

const Bai7: React.FC<Bai7Props> = ({ products }) => {
  const productList = useMemo(() => {
    return products.map(product => <ProductItem key={product.id} product={product} />);
  }, [products]);

  return (
    <div>
      <h2>Bai 7</h2>
      {productList}
    </div>
  );
};

export default Bai7;
