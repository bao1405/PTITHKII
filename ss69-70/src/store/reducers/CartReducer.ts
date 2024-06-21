
import Cart from "../../interfaces/Cart";

const cartLocal:Cart[]=JSON.parse(localStorage.getItem("cart")||'[]');
console.log(cartLocal);

const initialCart=cartLocal.map(btn=>{return{...btn,quantityUpdate:btn.quantity}})
const CartReducer=(state:Cart[]=initialCart,action:any)=>{
    switch(action.type){
        case 'SET_CART':
            const cartLocal:Cart[]=JSON.parse(localStorage.getItem("cart")||'[]');
            const initialCart=cartLocal.map(btn=>{return{...btn,quantityUpdate:btn.quantity}});
            return initialCart;
        case 'ADD_PRODUCT_NEW_CART':
            let product={
                id:Math.floor(Math.random()*100000000),
                product:action.payload,
                quantity:1,
                quantityUpdate:1,
            }
            let newCartAddProduct=[...state,product];
            localStorage.setItem("cart",JSON.stringify(newCartAddProduct));
            return newCartAddProduct;
        
        case 'ADD_PRODUCT_AVALAIBLE_CART':
            let newCartAddProductAvalaible=state.map(btn=>btn.product.id===action.payload?{...btn,quantityUpdate:btn.quantity+1}:btn);
            localStorage.setItem("cart",JSON.stringify(newCartAddProductAvalaible));
            return newCartAddProductAvalaible;
        case 'CHANGE_QUANTITY_CART':
            let newCartChangeQuantity:Cart[]=state.map(btn=>btn.id===action.id?{...btn,quantityUpdate:action.payload}:btn);
            localStorage.setItem("cart",JSON.stringify(newCartChangeQuantity));
            return newCartChangeQuantity;
        case 'UPDATE_CART':
            let newCartUpdate:Cart[]=state.map(btn=>btn.id===action.payload?{...btn,quantity:btn.quantityUpdate}:btn);
            localStorage.setItem("cart",JSON.stringify(newCartUpdate));
            return newCartUpdate;
        case 'DELETE_PRODUCT_CART':
            let newCartDeleteProduct:Cart[]=state.filter(btn=>btn.id!==action.payload);
            localStorage.setItem("cart",JSON.stringify(newCartDeleteProduct));
            return newCartDeleteProduct;
        default:
            return state;
    }
}
export default CartReducer;
