import React, { Component } from 'react';

interface Exercise01State {
  userName: string;
}

export default class Exercise01 extends Component<{}, Exercise01State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: 'John Doe'
    };
  }

  render() {
    return (
      <div>
        <h1>Bài 1</h1>
        <h1>Hello, {this.state.userName}!</h1>
      </div>
    );
  }
}

