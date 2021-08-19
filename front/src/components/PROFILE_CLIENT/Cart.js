import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'
import CartItem from "./CartItem"
import "./Profile.css"
import {Link} from "react-router-dom"

const Cart = () => {

    const cart = useSelector(state => state.cart.cart)

    const[totalPrice, setTotalPrice] = useState(0)
    const[totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let totalPrice = 0
        let totalItems = 0
        cart.forEach((item) => {
            totalItems += item.qty;
            totalPrice += item.qty * item.price
    })
        setTotalPrice(totalPrice)
        setTotalItems(totalItems)
    }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])
    return (
        <div className="cart">

        <h3 className="section_title" style={{fontSize:"2.3em", textAlign:"center"}}>Shopping Cart</h3>
        <hr style={{ color: "gray" }} />
        
            <div>
                {cart.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
            <div className="table_header total">
                <p>Total Items :  {totalItems}</p>
                <p>Total Order :  {totalPrice.toFixed(2)} DT</p>
            </div>
            <Link to={'/client/ADD-Order'}><button className="button" style={{marginLeft:"85%"}} >Order</button></Link>

        </div>
    )
}

export default Cart
