import React, { Component } from 'react';

export default class ChildComponent extends Component {
    render() {
        const { id, name, price, quantity } = this.props.product;
        return (
            <div>
                <h3>Child Component</h3>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
            </div>
        );
    }
}
