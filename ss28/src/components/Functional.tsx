import React from 'react'

interface Props {
  name : string
}
export default function Function(props:Props) {
  console.log("111111",props);
  const {name} = props;
  return (
    <div>function
      <p>xin chào {name}</p>
    </div>
  )
}
