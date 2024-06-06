import React, { Component } from 'react';
import ChildrenComp from './Children_Comp';

export default class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "John Doe"
        };
    }

    render() {
        return (
            <div>
                <h2>Bài 4</h2>
                <h2>Parent Component</h2>
                <ChildrenComp name={this.state.name} />
            </div>
        );
    }
}
