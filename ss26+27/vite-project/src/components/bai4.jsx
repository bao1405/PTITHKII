import React, { Component } from 'react';

export default class ColorBox extends Component {
    render() {
        const { color } = this.props;
        const boxStyle = {
            width: '200px',
            height: '200px',
            backgroundColor: color,
        };

        return (
            <div style={boxStyle}></div>
        );
    }
}
