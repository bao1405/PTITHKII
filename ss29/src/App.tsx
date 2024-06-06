import React, { Component } from 'react'
import Class from './components/Class'
import Function from './components/Function'
import Exercise01 from './components/Exercise01'
import Exercise02 from './components/Exercise02'
import Exercise03 from './components/Exercise03'
import Exercise04 from './components/Exercise04'
import Exercise05 from './components/Exercise05'
import AddElement from './components/AddElement'
import Exercise07 from './components/Exrecise07'
import Form from './components/Form'
import Random from './components/Random'
import Notification from './components/Notification'

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Class></Class>
        <Function></Function>
        <Exercise01></Exercise01>
        <Exercise02></Exercise02>
        <Exercise03></Exercise03>
        <Exercise04></Exercise04>
        <Exercise05></Exercise05>
        <AddElement></AddElement>
        <Exercise07></Exercise07>
        <Form></Form>
        <Random></Random>
        <Notification></Notification>
        </div>
    )
  }
}
