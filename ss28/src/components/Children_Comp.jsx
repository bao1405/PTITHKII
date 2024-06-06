import React, { Component } from 'react';

export default class ChildrenComp extends Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}
