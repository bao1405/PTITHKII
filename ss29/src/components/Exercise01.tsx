import React from 'react'

export default function Exercise01() {
    const hadleClick = ()=>{
        console.log("clicked");
        
    }
  return (
    <div>
        <h2>Bài 1</h2>
        <button onClick={hadleClick}>Click</button>
    </div>
  )
}
