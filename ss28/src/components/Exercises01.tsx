import React, { Component } from 'react';

interface ExercisesProps {
    name: string;
}

export default class Exercises01 extends Component<ExercisesProps> {
    render() {
        return (
            <div>
                Bài 1
                <p>Họ và tên : {this.props.name}</p>
            </div>
        );
    }
}