import React, { Component } from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
    document.title = newValue;
  }

  render() {
    return (
      <div>
        <h2>Bài 8</h2>
        <p>nhập để thay đổi tiêu đề:</p>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleInputChange} 
        />
      </div>
    );
  }
}

