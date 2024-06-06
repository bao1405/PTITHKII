import React, { Component } from 'react';

export default class Exercise03 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { 
                    id: 1, 
                    name: 'John Doe', 
                    address: '123 Main St' 
                },
                { 
                    id: 2, 
                    name: 'Jane Smith', 
                    address: '456 Elm St' 
                },
                { 
                    id: 3, 
                    name: 'Bob Johnson', 
                    address: '789 Oak St' 
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <h2>Bài 3</h2>
                <h2>User List</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>
                            <p>ID: {user.id}</p>
                            <p>Name:{user.name}</p>
                            <p>Address: {user.address}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
