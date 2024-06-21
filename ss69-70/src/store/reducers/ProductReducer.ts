const initialProduct={
    id:0,
    name:'',
    detail:'',
    img:'',
    quantity:0,
    price:0,
    status:true,
}
const ProductReducer=(state=initialProduct,action:any)=>{
    switch(action.type){
        case 'SET_PRODUCT':
            console.log(111);
            
            return {...action.payload}
        default:
            return state;
    }
}
export default ProductReducer;