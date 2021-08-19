import React, {useEffect} from "react";
import { addOrder } from "../../JS/action/actionOrder";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Profile.css";

const AddOrder = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [date, setDate] = useState("");
  const [mod_liv, setMod_liv] = useState("");
  const [mod_payement, setMod_payement] = useState("");

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cart)  

  useEffect(() => {
    let totalPrice = 0
    let totalItems = 0
    let today = new Date()
    let date = 0
    cart.forEach((item) => {
        totalItems += item.qty;
        totalPrice += item.qty * item.price
    })
    setTotalPrice(totalPrice)
    setTotalItems(totalItems)    
    date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
    setDate(date)
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice])


  const addOrd = () => {
    const newOrd = {
      totalItems,
      totalPrice,
      date,
      mod_liv,
      mod_payement,
    };

    dispatch(addOrder(newOrd));

    alert('Your Order is successfully added ! You can choose other product.');

    setTotalItems('')
    setTotalPrice('')
    setDate('')
    setMod_liv('')
    setMod_payement('')
  };



  return (
    <div className="add-product" style={{height:"580px"}} >
      <form action="/order/upload" method="POST" enctype="multipart/form-data">
        <h1
          style={{
            fontSize: "2.3em",
            marginLeft: "16%",
            marginTop: "-7%",
            marginBottom: "1%",
          }}
          className="section_title"
        >
          Add Order
        </h1>
        <div className="form-group">
          <label
            for="exampleFormControlInput1"
            style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
            Total Items
          </label>
          <input
            type="text"
            id="totalItems"
            className="form-control"
            value={totalItems}
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              color:"#8f8f96"
            }}
            name="totalItems"
            onChange={(e) => setTotalItems(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label 
          for="exampleFormControlInput1"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
            Total Price </label>
          <input
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              color:"#8f8f96"
            }}
            type="text"
            id="totalPrice"
            className="form-control"
            value={totalPrice}
            name="totalPrice"
            onChange={(e) => setTotalPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label
          for="exampleFormControlInput1"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >Date
        </label>
          <input
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              color:"#8f8f96"
            }}
            className="form-control"
            value={date}
            type="text"
            id="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label
          for="exampleFormControlInput1"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
              Delivery Mode
         </label>
          <select
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              textAlign:"center",
              color:"#8f8f96"
            }}
            class="form-control" 
            id="mod_liv"
            name="mod_liv"
            rows="2"
            onChange={(e) => setMod_liv(e.target.value)}
            required>
                <option>Express Delivery</option>
                <option>Economical home delivery</option>
                <option>Delivery to a relay point</option>
            </select>
        </div> <div>
          <label
          for="mod_payement"          
          style={{ fontFamily: "'El Messiri', sans-serif", color: "#665492" }}
          >
              Payment Mode
         </label>
          <select
            style={{
              fontFamily: "'El Messiri', sans-serif",
              height: "calc(2.5em + 0.75rem + 2px)",
              borderColor: "#bfb9ce",
              borderRadius: "2rem",
              marginBottom: "2%",
              textAlign:"center",
              color:"#8f8f96"
            }}
            class="form-control" 
            id="mod_payement"
            name="mod_payement"
            rows="2"
            placeholder=""
            onChange={(e) => setMod_payement(e.target.value)}
            required>
                <option>Cash on Delivery</option>
                <option>Bank Card</option>
            </select>
        </div>
        <div>
          <button className="button" style={{marginLeft:"30%", marginTop:"2%", width:"150px"}} type="button" onClick={() => addOrd()}>
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
