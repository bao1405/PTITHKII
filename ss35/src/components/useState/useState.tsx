import React,{useState} from 'react'

export default function UseState() {
  let cart = [
    {
      name:"iphone",
      price:155,
      quarity:5
  },
  {
    name:"iphone",
    price:155,
    quarity:5
},
]
  // let payment = cart.reduce((curenvalie,item)=>{
  //   return curenvalie + item.price*item.quarity;
  // },0);
  const [name,setName] =useState<string>("minh thư");
  const [count,setCount]= useState<number>(0);
  const [price,setPrice] = useState<Number>(()=>{
    return cart.reduce((curenvalie,item)=>{
      return curenvalie + item.price*item.quarity;
    },0);
  });
  const handleClick=()=>{
    setCount(count+1);
    setCount(pre=>pre+1);
    setCount(25);
  }
  // sử dụng past update
  console.log("hihi haha");
  
  return (
    <div>
        useState
        {/* 
            use + state:trạng thái dữ liệu
            bản chất use state là 1 function trả về mảng trong mảng có 2 phần tử
            (cú pháp ditractoring)
            đưa hết các usestate vào 1 cái queue
            đối với kĩ thuật pass update lấy giá trị trả về của useState lấy giá trị của useState trước làm giá trị đầu vào của useState sau
            truyền trực tiếp giá trị 
            hoặc dùng arraw function để trả về kết quả
        */}
        <p>giá tiền:{price}</p>
          <p>giá trị đếm biến count : {count}</p>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

