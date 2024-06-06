import React from 'react'
import Bai1 from './components/bai1'
import Bai2 from './components/bai2'
import Bai3 from './components/bai3'
import Bai4 from './components/bai4'
import Bai5 from './components/bai5'
import Bai6 from './components/bai6'
import Bai7 from './components/bai7'
import Bai8 from './components/bai8'
import Bai9 from './components/bai9'
import Bai10 from './components/bai10'
import UseState from './components/useState/useState'
export default function App() {
  return (
    <div>
      App
      {/* 
        React hook:
          1
          2.được ra đời phiên bản 16.8 năm 2018
          trước khi hook ra đời thì function component thì chỉ tạo ra 
          3.bây giờ đa phần sử dụng react hook
          - có những dự án dùng class làm chỉnh sửa và phát triển thêm
          khi làm việc với class thì phải nắm được vòng đời của component 
          -> chỉ dùng với function component
          khi làm việc với các hook quan tâm đến input và output (để ý đầu vào và đầu ra của các phương thức)
          usestate, useeffec, use ref
          
      */}
      <UseState></UseState>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
      <Bai10></Bai10>
      </div>
  )
}
