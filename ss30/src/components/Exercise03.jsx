import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0 
    };
  }

  handleChange = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Bai 3</h2>
        <h2>Giá trị của state: {this.state.value}</h2>
        <button onClick={this.handleChange}>Tăng giá trị</button>
      </div>
    );
  }
}

