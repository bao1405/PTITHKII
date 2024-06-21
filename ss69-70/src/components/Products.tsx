import React from 'react'
import { useSelector } from 'react-redux'
import State from '../interfaces/State'
import Product from './Product';
import Cart from './Cart';
import Notify from './Notify';

export default function Products() {
  return (
    <div className="container">
  <div className="page-header">
    <h1>Shopping Cart</h1>
  </div>
  <div className="row">
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            <Product/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <Cart/>
        </div>
        <Notify/>
      </div>
    </div>
  </div>
</div>

  )
}