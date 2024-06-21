import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import State from '../interfaces/State'

export default function Cart() {
  const [totalMoneyCart,setTotalMoney]=useState<number>(0);
  const carts=useSelector((state:State)=>state.carts);
  const dispatch=useDispatch();
  if(carts.length==0){
    dispatch({
      type:'NO_PRODUCT',
    })
  }
  const handleChangeQuantityProductInCart=(idProductInCart:number,e:React.ChangeEvent<HTMLInputElement>)=>{
    let value=+e.target.value;
    dispatch({
    type:'CHANGE_QUANTITY_CART',
    id:idProductInCart,
    payload:value,
    })
    dispatch({
      type:'NO_NOTIFY'
    })
  }
  const updateProductInCart=(idCart:number)=>{
    dispatch({
      type:'UPDATE_CART',
      payload:idCart,
    })
    dispatch({
      type:'UPDATE_NOTIFY',
    })
  }
  const deleteProductInCart=(idCart:number)=>{
    dispatch({
      type:'SET_CART'
    })
    dispatch({
      type:'DELETE_PRODUCT_CART',
      payload:idCart,
    })
    dispatch({
      type:'DELETE_NOTIFY',
    })
  }
  useEffect(()=>{
    let totalMoney=carts.reduce((total,num)=>{
      return total+num.quantityUpdate*num.product.price
    },0)
    setTotalMoney(totalMoney);
  },[carts])
  return (
     <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th style={{width:'4%'}}>STT</th>
                  <th>Name</th>
                  <th style={{width:'15%'}}>Price</th>
                  <th style={{width:'4%'}}>Quantity</th>
                  <th style={{width:'25%'}}>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {carts.map((btn,index)=>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{btn.product.name}</td>
                  <td>{btn.product.price} USD</td>
                  <td>
                    <input
                      min='1'
                      max={btn.product.quantity}
                      name="cart-item-quantity-1"
                      type="number"
                      value={btn.quantityUpdate}
                      onChange={(e)=>handleChangeQuantityProductInCart(btn.id,e)}
                    />
                  </td>
                  <td>
                    <a
                      className="label label-info update-cart-item"
                      data-product=""
                      onClick={()=>updateProductInCart(btn.id)}
                    >
                      Update
                    </a>
                    <a
                      className="label label-danger delete-cart-item"
                      data-product=""
                      onClick={()=>deleteProductInCart(btn.id)}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
                ))}
              </tbody>
              <tfoot id="my-cart-footer">
                <tr>
                  <td colSpan={4}>
                    There are <b>{carts.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {totalMoneyCart} USD
                  </td>
                </tr>
              </tfoot>
            </table>
          </div> 
  )
}