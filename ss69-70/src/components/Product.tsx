import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import State from '../interfaces/State'

export default function Product() {
    const carts=useSelector((state:State)=>state.carts)
    const products=useSelector((state:State)=>state.products);
    const dispatch=useDispatch(); 
    const addProductToCart=(idProduct:number)=>{
        //case Product is not available in Cart
        if(!carts.find(btn=>btn.product.id===idProduct)){
            let productAdd=products.find(btn=>btn.id===idProduct);
            dispatch({
                type:'ADD_PRODUCT_NEW_CART',
                payload:productAdd,
            })
            //case Product is avalaible in cart
        }else{
            dispatch({
                type:'ADD_PRODUCT_AVALAIBLE_CART',
                payload:idProduct,
            })
        }
        dispatch({
            type:'ADD_NOTIFY'
        })
    }  

  return (
<div>
    {
     products.map(product=>(
        <div className="media product" key={product.id}>
            <div className="media-left">
            <a href="#">
                <img
                className="media-object"
                src={product.img}
                alt="pizza"
                />
            </a>
            </div>
            <div className="media-body">
            <h4 className="media-heading">{product.name}</h4>
            <p>
               {product.detail}
            </p>
            <input
                name="quantity-product-1"
                type="number"
                value={product.quantity}
                style={{display:product.quantity>0?'':'none'}}
            />
            {product.quantity>0? (<a style={{cursor:'pointer'}} onClick={()=>addProductToCart(product.id)} className="price">{product.price} USD</a>):(<span className="price"> ${product.price} USD</span>)}
            </div>
        </div>
        ))
    }
</div>
  )
}