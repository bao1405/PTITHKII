import React, { useState, useEffect } from 'react';

const Cart = () => {
    // Define initial state for cart as an empty array
    const [cart, setCart] = useState([]);
    
    // Define initial state for notification and total price
    const [notification, setNotification] = useState({ message: '', color: '' });
    const [totalPrice, setTotalPrice] = useState(0);
  
    // Fetch cart data from local storage when component mounts
    useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart && JSON.parse(savedCart).length > 0) {
        setCart(JSON.parse(savedCart));
      }
    }, []);
    const handleUpdateQuantity = (productId, newQuantity) => {
        setCart(prevCart => {
          const updatedCart = prevCart.map(item => {
            if (item.id === productId) {
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
      
          // Calculate total price after updating cart
          const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
          setTotalPrice(totalPrice);
      
          // Save updated cart to local storage
          localStorage.setItem('cart', JSON.stringify(updatedCart));
      
          return updatedCart;
        });
      };
    // Handle updating cart item
    const handleUpdateCartItem = (productId, action) => {
        if (action === 'update') {
          const inputElement = document.querySelector(`input[name="cart-item-quantity-${productId}"]`);
          if (inputElement) {
            const newQuantity = parseInt(inputElement.value, 10);
            if (!isNaN(newQuantity)) {
              handleUpdateQuantity(productId, newQuantity);
            }
          }
        } else {
          setCart(prevCart => {
            const updatedCart = prevCart.map(item => {
              if (item.id === productId) {
                let quantity = item.quantity;
                if (action === 'increase') {
                  quantity++;
                } else if (action === 'decrease') {
                  quantity = Math.max(1, quantity - 1);
                }
                return { ...item, quantity };
              }
              return item;
            });
            
            // Calculate total price after updating cart
            const totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
            setTotalPrice(totalPrice);
      
            // Save updated cart to local storage
            localStorage.setItem('cart', JSON.stringify(updatedCart));
      
            return updatedCart;
          });
        }
        
      };
  
    // Handle deleting cart item
    const handleDeleteCartItem = (productId) => {
      setCart(prevCart => {
        const updatedCart = prevCart.filter(item => item.id !== productId);
        return updatedCart;
      });
    };
  
    // Save cart data to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
      
      // Calculate total price whenever cart changes
      const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalPrice(totalPrice);
    }, [cart]);

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th style={{width:"4%"}}>STT</th>
                <th>Name</th>
                <th style={{width:"15%"}}>Price</th>
                <th style={{width:"4%"}}>Quantity</th>
                <th style={{width:"25%"}}>Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {cart.map((item, index) => (
                <tr key={item.id} className="cart-item">
                  <th scope="row">{index + 1}</th>
                  <td className="cart-item-name">{item.name}</td>
                  <td>{item.price} USD</td>
                  <td>{item.quantity}</td>
                  <td>
                    <input className="cart-item-quantity" onChange={() => handleUpdateCartItem(item.id, 'change')} name={`cart-item-quantity-${item.id}`} type="number" defaultValue={item.quantity} />
                  </td>
                  <td>
                    <a className="label label-info update-cart-item" onClick={() => handleUpdateCartItem(item.id, 'update')}>Update</a>
                    <a className="label label-danger delete-cart-item" onClick={() => handleDeleteCartItem(item.id)}>Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot id="my-cart-footer">
              <tr>
              <td colSpan={4} className="col-span-4">
                  There are <b>{cart.length}</b> items in your shopping cart.
                </td>
                <td colSpan={4} className="col-span-4 total-price text-left">{totalPrice} USD</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className={`alert alert-${notification.color}`} role="alert" id="mnotification">
        {notification.message}
      </div>
    </div>
  );
};

export default Cart;
