import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>MyComponent</h2>
        <p>Data: {data}</p>
      </div>
    );
  }
}

export default class Exercise05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: "Initial Data"
    };
    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    this.setState({
      newData: "Updated Data"
    });
  }

  render() {
    return (
      <div>
        <h1>Bài 5</h1>
        <button onClick={this.updateData}>Update Data</button>
        {/* Truyền newData từ state của App vào MyComponent */}
        <MyComponent data={this.state.newData} />
      </div>
    );
  }
}

