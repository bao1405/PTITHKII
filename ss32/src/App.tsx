import React, { useState } from 'react'
import Jobs from './components/Jobs'

export default function App() {
 
  return (
    <div>
        <h2> Danh sách công việc</h2>
     
      <Jobs></Jobs>
        <p>danh sách việc đã hoàn thành </p>
    </div>
  )
}
