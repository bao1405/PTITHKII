import React, { Component } from 'react';

export default class ChildComponent extends Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <ul>
                    {this.props.users.map(user => (
                        <li key={user.id}>
                            <p>ID: {user.id}</p>
                            <p>Name: {user.name}</p>
                            <p>Address: {user.address}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
