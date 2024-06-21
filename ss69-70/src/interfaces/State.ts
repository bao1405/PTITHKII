import Product from "."
import Cart from "./Cart";
type State={
    products:Product[];
    product:Product;
    carts:Cart[];
    notify:string,
}
export default State;