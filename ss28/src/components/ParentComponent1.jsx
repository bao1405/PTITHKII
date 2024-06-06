import React, { Component } from 'react';
import ChildComponent1 from './ChildComponent1';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { 
                    id: 1, 
                    name: "John Doe", 
                    address: "123 Main St", 
                    email: "john@example.com" 
                },
                { 
                    id: 2, 
                    name: "Jane Smith", 
                    address: "456 Elm St", 
                    email: "jane@example.com" 
                },
                { 
                    id: 3, 
                    name: "Bob Johnson", 
                    address: "789 Oak St", 
                    email: "bob@example.com" 
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Bài 6</h2>
                <h2>Parent Component</h2>
                <ChildComponent1 users={this.state.users} />
            </div>
        );
    }
}
