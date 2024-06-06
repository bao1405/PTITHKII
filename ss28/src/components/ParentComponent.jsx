import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: "Laptop",
                price: 1000,
                quantity: 5
            }
        };
    }

    render() {
        return (
            <div>
                <h2>Bài 5</h2>
                <h2>Parent Component</h2>
                <ChildComponent product={this.state.product} />
            </div>
        );
    }
}
