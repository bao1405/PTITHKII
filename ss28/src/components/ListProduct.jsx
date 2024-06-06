import React, { Component } from 'react';
import Product from './Product';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { 
                    id: 1, 
                    name: "Laptop", 
                    price: 1000, 
                    quantity: 5 
                },
                { 
                    id: 2, 
                    name: "Smartphone", 
                    price: 500, 
                    quantity: 10 
                },
                { 
                    id: 3, 
                    name: "Tablet", 
                    price: 300, 
                    quantity: 8 
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Bài 8</h2>
                <h2>List of Products</h2>
                {this.state.products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        );
    }
}
