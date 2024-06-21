const initialProducts=[{
    id:0,
    name:'Pizza',
    detail:'Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    img:'images/pizza.jpg',
    quantity:0,
    price:30,
    status:true,
   },{
    id:1,
    name:'Hambuger',
    detail:'Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    img:'images/Hamburger.jpg',
    quantity:4,
    price:15,
    status:true,
},{
    id:3,
    name:'Bread',
    detail:'Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    img:'images/bread.jpg',
    quantity:5,
    price:30,
    status:true,
},{
    id:4,
    name:'Cake',
    detail:'Lorem ipsum dolor sit amet, consectetur adipisicingelit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
    img:'images/Cake.jpg',
    quantity:10,
    price:30,
    status:true,
}
]
const ProductsReducer=(state=initialProducts,action:any)=>{
    switch(action.type){
        case 'GET_PRODUCTS':
            let productsLocal=JSON.parse(localStorage.getItem('products')||'[]');
            return [...state,...productsLocal]
        default:
            return state;
    }
}
export default ProductsReducer;