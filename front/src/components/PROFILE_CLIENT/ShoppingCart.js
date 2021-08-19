import React from "react";
import "./Profile.css";
import banner from "../../img/category.jpg";
import { useSelector } from 'react-redux'
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const ShoppingCart = () => {

  const cart = useSelector((state) => state.reducerShop.cart)


  return (
    <div className="cart">
      <div
        style={{
          backgroundImage: `url(${banner})`,
          height: "300px",
          marginTop: "-3%",
        }}
        className="cart_banner"
      >
        <h1 className="shoppingCart section_title">Shopping Cart</h1>
      </div>
      <div className="products_list">
        <div className="table-header">
          <span style={{flexBasis:"20%"}}>Products</span>
          <span style={{flexBasis:"30%"}}>Description</span>
          <span style={{flexBasis:"25%"}}>Price</span>
          <span style={{flexBasis:"25%"}}>Quantity</span>
          <span style={{flexBasis:"25%"}}>Total</span>
          <span style={{flexBasis:"2%"}}>Delete</span>
        </div>
        <div className="product">
            {cart.map((item) => {              
              <CartItem  key = {item.id} item = {item} />
            })}
        </div>
         <div className="shopping-cart-bottom">             
          <span className="total">Order's Total : </span>
          <Link  to="/client/ADD-Order"><button className="button order-button">Order</button></Link>
  
        </div> 
      </div>
    </div>
  );
};

export default ShoppingCart;
