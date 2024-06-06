import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      value: 0 // Giá trị ban đầu của state
    };
  }

  // Hàm xử lý sự kiện thay đổi giá trị của state
  handleChange = () => {
    // Cập nhật state khi sự kiện xảy ra
    this.setState(prevState => ({
      value: prevState.value + 1 // Tăng giá trị state lên 1
    }));
  }

  // Lifecycle method để kiểm tra xem component cần render lại hay không
  shouldComponentUpdate(nextProps, nextState) {
    // Trả về false để ngăn chặn việc render lại khi giá trị state không thay đổi
    return nextState.value !== this.state.value;
  }

  render() {
    return (
      <div>
        <h2>Bài 4</h2>
        <h2>Giá trị của state: {this.state.value}</h2>
        {/* Sử dụng sự kiện onClick để gọi hàm handleChange */}
        <button onClick={this.handleChange}>Tăng giá trị</button>
      </div>
    );
  }
}

export default MyComponent;
