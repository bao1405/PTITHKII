import React from 'react'
import Functional from './components/Functional'
import Class from './components/Class'
import Exercises01 from './components/Exercises01'
import Exercises02 from './components/Exercises02'
import Exercises03 from './components/Exercises03.jsx'
import Parent_Comp from './components/Parent_Comp.jsx'
import ParentComponent from './components/ParentComponent.jsx'
import ParentComponent1 from './components/ParentComponent1.jsx'
import ListPost from './components/ListPost.jsx'
import ListProduct from './components/ListProduct.jsx'
import ComponentApp from './components/component_App.jsx'
import Todolist from './components/Todolist.jsx'

export default function App() {
  const fullName:string = "rikkei academy";
  const name:string = "Nguyễn Minh Sơn";
  return (
    <div>App
      {/* {
        props và state
        1.props : properties
        dùng để chuyền dữ liệu từ component cha sang component con
        thế nào là component cha
      } */}
      <Functional name = {fullName}></Functional>
      <Class></Class>
      <Exercises01 name = {name}></Exercises01>
      <Exercises02></Exercises02>
      <Exercises03></Exercises03>
      <Parent_Comp></Parent_Comp>
      <ParentComponent></ParentComponent>
      <ParentComponent1></ParentComponent1>
      <ListPost></ListPost>
      <ListProduct></ListProduct>
      <ComponentApp></ComponentApp>
      <Todolist></Todolist>
    </div>
  )
}
