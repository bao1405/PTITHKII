import React, { Component } from 'react'
// import  ClassComponent  from './components/classComponents.jsx'
import UserInfo from './components/userInfo.jsx'
import Header from './components/bai1'
import Bai2 from './components/bai2'
import Bai4 from './components/bai4.jsx'
import Bai7 from './components/bai7.jsx'
import Bai8 from './components/bai8.jsx'
// import Bai5 from './components/boxcolor.jsx'
// import Formatname from './components/formatname.jsx'
export default class App extends Component {
  render() {
    const flexContainerStyle = {
      display: 'flex',
      gap: '10px'
    };
    return (
      
      <div>
        {/* <ClassComponent/> */}
        <Header/>
        <Bai2/> 
        {/* <UserInfo/> */}
        
        <div style={flexContainerStyle}>
        <Bai4  color="red" />
        <Bai4  color="blue" />
        <Bai4  color="green" />
        </div>

        {/* <Bai5 color="blue"/> */}
        {/* <Formatname /> */}
        <Bai7/>
        <Bai8/>
      </div>
    )
  }
}
