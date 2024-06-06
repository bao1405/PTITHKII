import React, { useState } from 'react'
interface User{
    username:string;
    email:string;
}
export default function Function() {
    const [user,setUser]=useState<User>({
        username:"",
        email:"",
    })

    const handleClick=()=>{
        console.log("click");
    }

    const hadleDelete = (userID:any) =>{
        console.log("UserID",userID);
    }

    const register = () => {
        console.log("user đăng kí",user);
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let name= e.target.name;
        let value = e.target.value;
        setUser({
            ...user,[name]:value
        })
    }
  return (
    <div>
        <p onClick={()=>hadleDelete(5)}>hoa</p>
        <button onClick={handleClick}>click</button><br/>

        <label htmlFor="">userName:</label>
        <input onChange={handleChange} name='username' type="text" /><br/>
        <label htmlFor="">email:</label>
        <input onChange={handleChange} name='email' type="text" /><br/>

        <button onClick={register}>register</button>
    </div>
  )
}
